import Structure from "../classes/Structure.js";
import Resource from "../classes/Resource.js";
import Cost from "../classes/Cost.js";
import Event from "../classes/Event.js";

export const INDUSTRY_NAME = "Industry";
const AGRICULTURE_NAME = "Agriculture";

//ROCKS
export const ROCKS = new Resource("Rocks", "Rocks collected from the planet's surface", "../../../Images/New/Rock Card.png", "kg", INDUSTRY_NAME, 1, 0, null, null);

//METAL
const METAL_COSTS = [new Cost(ROCKS, 5)];
export const METAL = new Resource("Metal", "Refined metal used for creating structures", "../../../Images/New/Metal Card.png", "kg", INDUSTRY_NAME, 0, 0, METAL_COSTS, null);

//WATER
export const WATER = new Resource("Water", "", "../../images/New/Water Card.png", "L", AGRICULTURE_NAME, 1, 0, null, null);

//MILL
const MILL_COSTS = [new Cost(WATER, 15), new Cost(METAL, 20)];
export const MILL = new Structure("Mill", "", "../../../Images/New/Mill Card.png", MILL_COSTS);

//REFINERY
const REFINERY_COSTS = [new Cost(METAL, 30)];
export const REFINERY = new Structure("Refinery", "", "../../../Images/New/Refinery Card.png", REFINERY_COSTS);

//DRILL
const DRILL_COSTS = [new Cost(METAL, 30)];
export const DRILL = new Structure("Drill", "", "../../../Images/New/Drill Card.png", DRILL_COSTS);

//CORN
const CORN_COSTS = [new Cost(WATER, 2)];
export const CORN = new Resource("Corn", "", "../../../Images/New/Corn Card.png", "Cobs", AGRICULTURE_NAME, 0, 1, CORN_COSTS, null);

//WHEAT
const WHEAT_COSTS = [new Cost(WATER, 4)];
const WHEAT_REQUIREMENTS = [MILL];
export const WHEAT = new Resource("Wheat", "", "../../../Images/New/Wheat Card.png", "kg", AGRICULTURE_NAME, 0, 0, WHEAT_COSTS, WHEAT_REQUIREMENTS);

//BREAD
const BREAD_COSTS = [new Cost(WATER, 15), new Cost(WHEAT, 5)];
export const BREAD = new Resource("Bread", "", "../../../Images/New/Bread Card.png", "Loaves", AGRICULTURE_NAME, 0, 3, BREAD_COSTS, null);

//OIL
const OIL_REQUIREMENTS = [DRILL];
export const OIL = new Resource("Oil", "Crude oil extracted from the ground", "../../../Images/New/Oil Card.png", "L", INDUSTRY_NAME, 1, 0, null, OIL_REQUIREMENTS);

//FUEL
const FUEL_COSTS = [new Cost(OIL, 5)];
const FUEL_REQUIREMENTS = [REFINERY];
export const FUEL = new Resource("Fuel", "Volatile rocket fuel", "../../../Images/New/Fuel Card.png", "L", INDUSTRY_NAME, 0, 0, FUEL_COSTS, FUEL_REQUIREMENTS);

//ROCKET
const ROCKET_COSTS = [new Cost(METAL, 50), new Cost(FUEL, 50), new Cost(CORN, 100)];
export const ROCKET = new Resource("Rocket", "Your ticket home!", "../../../Images/New/Rocket Card.png", "Rocket", INDUSTRY_NAME, 0, 0, ROCKET_COSTS, null);


/**
 * RESOURCES AND STRUCTURES ABOVE THIS LINE
 * ----------------------------------------
 * EVENTS BELOW THIS LINE
 */

//METEOR
const METEOR_DO = function(){
    WHEAT.deplete(15);
    CORN.deplete(10);
    ROCKS.add(10)
}
const METEOR_FINISH = function(){}
export const METEOR = new Event("Meteor Strike", "15 " + WHEAT.unitName + " of wheat and 10 " + CORN.unitName + " of corn have been destroyed, but now you have an extra 10 " + ROCKS.unitName + " of rock!", "../../../Images/New/Meteor Card.png", 0, METEOR_DO, METEOR_FINISH);

//HARVEST
const HARVEST_DO = function(){
    WHEAT.add(10);
}
const HARVEST_FINISH = function(){}
export const HARVEST = new Event("Harvest", "It’s harvest season! You have gained 10" + WHEAT.unitName + " of wheat.", "../../../Images/New/Harvest Card.png", 0, HARVEST_DO, HARVEST_FINISH);

//MINE
const MINE_DO = function(){
    ROCKS.add(10);
}
const MINE_FINISH = function(){}
export const MINE = new Event("Mining Rush", "Better bring a large bag for this mining rush-- you have gained 5" + ROCKS.unitName + " of rocks!", "../../../Images/New/Mining Rush Card.png", 0, MINE_DO, MINE_FINISH);

//INVASION
const INVASION_DO = function(){
    METAL.deplete(5);
    CORN.deplete(5);
    BREAD.deplete(5);
}
const INVASION_FINISH = function(){}
export const INVASION = new Event("Invasion", "Some rogue aliens are extracting your resources to build their own rocket. They have taken 5" + METAL.unitName + " of your metal, 5" + CORN.unitName + " of corn, and 2 " + BREAD.unitName + " of bread.", "../../../Images/New/Invasion Card.png", 0, INVASION_DO, INVASION_FINISH);

//FIRE
const FIRE_DO = function(){
    MILL.isCreated = false;
}
const FIRE_FINISH = function(){}
export const FIRE = new Event("Fire", "Where was the fire safety inspector? Your mill has caught on fire!", "../../../Images/New/Flame Card.png", 0, FIRE_DO, FIRE_FINISH);

//Insomnia
const INSOMNIA_DO = function(){
    ROCKS.passiveAmt /= 2;
    WATER.passiveAmt /= 2;
    OIL.passiveAmt /= 2;
}
const INSOMNIA_FINISH = function(){
    ROCKS.passiveAmt *= 2;
    WATER.passiveAmt *= 2;
    OIL.passiveAmt *= 2;
}
export const INSOMNIA = new Event("Insomnia", "You look tired! It’s taking you double the amount of time to gain materials.", "../../../Images/New/Insomnia Card.png", 50, INSOMNIA_DO, INSOMNIA_FINISH);

//GEESE
const GEESE_DO = function(){
    BREAD.deplete(BREAD.amount + 10000);
}
const GEESE_FINISH = function(){}
export const GEESE = new Event("Geese", "Peace was never an option. The geese are taking all of your bread!", "../../../Images/New/Goose Card.png", 0, GEESE_DO, GEESE_FINISH);

//STONEDOG
const STONEDOG_DO = function(){
    REFINERY.isCreated = false;
}
const STONEDOG_FINISH = function(){}
export const STONEDOG = new Event("Stone Dog Attack", "The Stone Dog has arrived, and it’s going after the refinery!", "../../../Images/New/Stone Dog Card.png", 0, STONEDOG_DO, STONEDOG_FINISH);

//ARRAYS
export const ALL_INDUSTRY_RESOURCES = [ROCKS, METAL, OIL, FUEL, ROCKET];
export const ALL_AGRICULTURE_RESOURCES = [WATER, WHEAT, CORN, BREAD];
export const ALL_STRUCTURES = [DRILL, MILL, REFINERY];
export const ALL_EVENTS = [FIRE, GEESE, HARVEST, INSOMNIA, INVASION, METEOR, MINE, STONEDOG];
