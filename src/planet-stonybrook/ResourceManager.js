import * as INDUSTRY from './resource-objects/IndustryResources.js';
import * as AGRICULTURE from './resource-objects/AgricultureResources.js'
import * as STRUCTURES from './resource-objects/Structures.js';
import { TICK_SPEED } from './classes/Resource.js';

/**
 * This class handles all of the interactions between resources.
 * Runner of all passive resource gains.
 */

export const ALL_RESOURCES = INDUSTRY.ALL_INDUSTRY_RESOURCES.concat(AGRICULTURE.ALL_AGRICULTURE_RESOURCES);
export default class ResourceManager {
    constructor(appController){
        setInterval(runTick, TICK_SPEED);
        this.activeEvent = null;
        this.activeEventTimer = 0;
        this.controller = appController;
    }

    initStructureCosts(){
        const MILL_COSTS = [new Cost(AGRICULTURE_RESOURCES.WATER, 15), new Cost(INDUSTRY_RESOURCES.METAL, 20)];
        const REFINERY_COSTS = [new Cost(INDUSTRY_RESOURCES.METAL, 30)];
        const DRILL_COSTS = [new Cost(INDUSTRY_RESOURCES.METAL, 30)];
        STRUCTURES.MILL.costs = MILL_COSTS;
        STRUCTURES.REFINERY.costs = REFINERY_COSTS;
        STRUCTURES.DRILL.costs = DRILL_COSTS;

        for(let structure of STRUCTURES.ALL_STRUCTURES){
            structure.createCard();
        }
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