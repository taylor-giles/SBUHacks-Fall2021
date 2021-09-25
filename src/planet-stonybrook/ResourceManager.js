import * as OBJECTS from './resource-objects/GameplayObjects.js';
import { TICK_SPEED } from './classes/Resource.js';

/**
 * This class handles all of the interactions between resources.
 * Runner of all passive resource gains.
 */

export const ALL_RESOURCES = OBJECTS.ALL_INDUSTRY_RESOURCES.concat(OBJECTS.ALL_AGRICULTURE_RESOURCES);
export default class ResourceManager {
    constructor(appController){
        setInterval(this.runTick, TICK_SPEED);
        this.activeEvent = null;
        this.activeEventTimer = 0;
        this.controller = appController;
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
            //TODO: Random chance for event
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
            let num_reached = 0;
            if(resource.costs) {
                for(const cost of resource.costs) {
                    if(cost) {
                        if(cost.resource.amount >= cost.amount) {
                            num_reached += 1;
                        }
                    }
                }
                let btn = resource.createButton;
                if(num_reached == resource.costs.length) {
                    btn.classList.add("button-active");
                    btn.classList.remove("button-disabled");
                }
                else {
                    btn.classList.remove("button-active");
                    btn.classList.add("button-disabled");
                }
            }
        }
    }
}