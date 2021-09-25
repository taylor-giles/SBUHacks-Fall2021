import * as OBJECTS from './resource-objects/GameplayObjects';
import { TICK_SPEED } from './classes/Resource.js';

/**
 * This class handles all of the interactions between resources.
 * Runner of all passive resource gains.
 */

export const ALL_RESOURCES = OBJECTS.ALL_INDUSTRY_RESOURCES.concat(OBJECTS.ALL_AGRICULTURE_RESOURCES);
export default class ResourceManager {
    constructor(appController){
        setInterval(runTick, TICK_SPEED);
        this.activeEvent = null;
        this.activeEventTimer = 0;
        this.controller = appController;
    }

    /**
     * Runner - this function runs every tick
     */
    runTick(){
        this.eventTickAction();
        this.passiveResourceTickAction();
    }

    eventTickAction(){
        //If there is an event...
        if(activeEvent != null){
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
    }

    passiveResourceCheckAction(){
        //Check for passive resources
        for(const resource of ALL_RESOURCES){
            if(!resource.costs){
                //Passively increment
                resource.add(resource.passiveAmt);
            }
        }
    }
}