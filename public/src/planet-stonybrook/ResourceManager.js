import * as OBJECTS from './resource-objects/GameplayObjects.js';
import { TICK_SPEED } from './classes/Resource.js';
import { gameWon } from './overview/FinishGame.js';
import { EVENT_CHANCE } from './classes/Event.js';
import { HEALTH_BAR } from './resource-objects/OverviewObjects.js';

/**
 * This class handles all of the interactions between resources.
 * Runner of all passive resource gains.
 */
const PASSIVE_HEALTH_LOSS = 0.1; //The amount of health lost per tick
var activeEventTimer = 0;
var activeEvent = null;
export const ALL_RESOURCES = OBJECTS.ALL_INDUSTRY_RESOURCES.concat(OBJECTS.ALL_AGRICULTURE_RESOURCES);
export const calculateAvailableFood = function(){
    let totalFood = 0;
    for(const resource of ALL_RESOURCES){
        totalFood += resource.amount * resource.foodAmt;
    }
    return totalFood;
}
export default class ResourceManager {
    constructor(appModel){
        //Set the model for the events
        for(let event in OBJECTS.ALL_EVENTS){
            OBJECTS.ALL_EVENTS[event].model = appModel;
        }

        //Run runTick() every tick
        setInterval(this.runTick, TICK_SPEED);
    }

    /**
     * Runner - this function runs every tick
     */
    runTick(){
        if(!ResourceManager.stopTime){
            //If there is an event...
            if(activeEvent){
                //Check its timer. If the duration has expired...
                if(activeEventTimer++ >= activeEvent.duration){
                    //Finish the event
                    activeEvent.finishEvent();
                    activeEvent = null;
                    activeEventTimer = 0;
                }
            } else {
                if(Math.random() < EVENT_CHANCE){
                    activeEvent = OBJECTS.ALL_EVENTS[Math.floor(Math.random() * OBJECTS.ALL_EVENTS.length)];
                    activeEvent.createModal();
                    activeEvent.doEvent();
                    ResourceManager.stopTime = true;
                    console.log("Running event " + activeEvent.name);
                }
            }

            //Check for passive resources
            for(const resource of ALL_RESOURCES){
                if(!resource.costs){
                    //Passively increment
                    resource.create(resource.passiveAmt);
                }
            }

            // Check Thresholds to potentially update buttons
            for(const resource of ALL_RESOURCES) {
                if(resource.createButton){
                    if(resource.canAfford()){
                        resource.createButton.classList.add("button-active");
                        resource.createButton.classList.remove("button-disabled");
                    } else {
                        resource.createButton.classList.remove("button-active");
                        resource.createButton.classList.add("button-disabled");
                    }
                }
                if(resource.eatButton){
                    if(resource.amount > 0){
                        resource.eatButton.classList.add("button-active");
                        resource.eatButton.classList.remove("button-disabled");
                    } else {
                        resource.eatButton.classList.remove("button-active");
                        resource.eatButton.classList.add("button-disabled");
                    }
                }
            }

            for(const structure of OBJECTS.ALL_STRUCTURES){
                if(structure.createButton){
                    if(structure.canAfford() && !structure.isCreated){
                        structure.createButton.classList.add("button-active");
                        structure.createButton.classList.remove("button-disabled");
                    } else {
                        structure.createButton.classList.remove("button-active");
                        structure.createButton.classList.add("button-disabled");
                    }
                }
            }

            //Decrement health
            HEALTH_BAR.decrementHealth(PASSIVE_HEALTH_LOSS);

            //Update available food
            HEALTH_BAR.food = calculateAvailableFood();
            HEALTH_BAR.setHealth();

            //Win!
            if(OBJECTS.ROCKET.amount > 0){
                gameWon();
            }
        }
    }
}