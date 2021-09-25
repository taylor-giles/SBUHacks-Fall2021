import * as OBJECTS from './resource-objects/GameplayObjects.js';
import { TICK_SPEED } from './classes/Resource.js';
import { gameWon } from './overview/FinishGame.js';
import { EVENT_CHANCE } from './classes/Event.js';
import { HEALTH_BAR } from './resource-objects/OverviewObjects.js';

/**
 * This class handles all of the interactions between resources.
 * Runner of all passive resource gains.
 */
const PASSIVE_HEALTH_LOSS = 1; //The amount of health lost per tick
export const ALL_RESOURCES = OBJECTS.ALL_INDUSTRY_RESOURCES.concat(OBJECTS.ALL_AGRICULTURE_RESOURCES);
export const calculateAvailableFood = function(){
    let totalFood = 0;
    for(const resource of ALL_RESOURCES){
        totalFood += resource.amount * resource.foodAmt;
    }
    return totalFood;
}
export default class ResourceManager {
    constructor(appController, healthBar){
        setInterval(this.runTick, TICK_SPEED);
        this.activeEvent = null;
        this.activeEventTimer = 0;
        this.controller = appController;
        this.healthBar = healthBar;
    }

    /**
     * Runner - this function runs every tick
     */
    runTick(){
        //If there is an event...
        if(this.activeEvent){
            //Check its timer. If the duration has expired...
            if(this.activeEventTimer++ >= this.activeEvent.duration){
                //Finish the event
                this.activeEvent.finishEvent();
                this.activeEvent = null;
                this.activeEventTimer = 0;
            }
        } else {
            if(Math.random() > EVENT_CHANCE){
                //TODO: Pick and activate a random event
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
                if(structure.canAfford()){
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