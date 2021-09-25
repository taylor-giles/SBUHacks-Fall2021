import * as INDUSTRY_RESOURCES from './IndustryResources.js';
import * as AGRICULTURE_RESOURCES from './AgricultureResources.js';
import Structure from "../classes/Structure.js";

export const MILL = new Structure("Mill", "", "../../../Images/Mill Card.png", function(){
    if(INDUSTRY_RESOURCES.METAL.subtract(10) && AGRICULTURE_RESOURCES.WATER.subtract(15)){
        MILL.isCreated = true;
    } else {
        //TODO: Show error message
    }
});

// export const ROBOTS = new Structure("Robots", "", "../../../Images/Robot Card.png", function(){
//     if(INDUSTRY_RESOURCES.METAL.subtract(50) && INDUSTRY_RESOURCES.OIL.subtract(10)){
//         ROBOTS
//     }
// });

export const REFINERY = new Structure("Refinery", "", "../../../Images/Refinery Card.png", function(){
    if(INDUSTRY_RESOURCES.METAL.subtract(100)){
        REFINERY.isCreated = true;
    } else {
        //TODO: Show error message
    }
});

export const DRILL = new Structure("Drill", "", "../../../Images/Drill Card.png", function(){
    if(INDUSTRY_RESOURCES.METAL.subtract(6)){
        DRILL.isCreated = true;
    } else {
        //TODO: Show error message
    }
});