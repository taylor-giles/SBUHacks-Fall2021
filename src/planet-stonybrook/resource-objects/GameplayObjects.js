import Structure from "../classes/Structure.js";
import Resource from "../classes/Resource.js";
import Cost from "../classes/Cost.js";

export const INDUSTRY_NAME = "Industry";
const AGRICULTURE_NAME = "Agriculture";

//ROCKS
export const ROCKS = new Resource("Rocks", "Rocks collected from the planet's surface", "../../../Images/New/Rock Card.png", "kg", INDUSTRY_NAME, null, null);

//METAL
const METAL_COSTS = [new Cost(ROCKS, 5)];
export const METAL = new Resource("Metal", "Refined metal used for creating structures", "../../../Images/New/Metal Card.png", "kg", INDUSTRY_NAME, METAL_COSTS, null);

//WATER
export const WATER = new Resource("Water", "", "../../images/New/Water Card.png", "L", AGRICULTURE_NAME, null, null);

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
export const CORN = new Resource("Corn", "", "../../../Images/New/Corn Card.png", "Cobs", AGRICULTURE_NAME, CORN_COSTS, null);

//WHEAT
const WHEAT_COSTS = [new Cost(WATER, 4)];
const WHEAT_REQUIREMENTS = [MILL];
export const WHEAT = new Resource("Wheat", "", "../../../Images/New/Wheat Card.png", "kg", AGRICULTURE_NAME, WHEAT_COSTS, WHEAT_REQUIREMENTS);

//BREAD
const BREAD_COSTS = [new Cost(WATER, 15), new Cost(WHEAT, 5)];
export const BREAD = new Resource("Bread", "", "../../../Images/New/Bread Card.png", "Loaves", AGRICULTURE_NAME, BREAD_COSTS, null);

//OIL
const OIL_REQUIREMENTS = [DRILL];
export const OIL = new Resource("Oil", "Crude oil extracted from the ground", "../../../Images/New/Oil Card.png", "L", INDUSTRY_NAME, null, OIL_REQUIREMENTS);

//FUEL
const FUEL_COSTS = [new Cost(OIL, 5)];
const FUEL_REQUIREMENTS = [REFINERY];
export const FUEL = new Resource("Fuel", "Volatile rocket fuel", "../../../Images/New/Fuel Card.png", "L", INDUSTRY_NAME, FUEL_COSTS, FUEL_REQUIREMENTS);

//ROCKET
const ROCKET_COSTS = [new Cost(METAL, 50), new Cost(FUEL, 50), new Cost(CORN, 100)];
export const ROCKET = new Resource("Rocket", "Your ticket home!", "../../../Images/New/Rocket Card.png", "Rocket", INDUSTRY_NAME, ROCKET_COSTS, null);

//ARRAYS
export const ALL_INDUSTRY_RESOURCES = [ROCKS, METAL, OIL, FUEL, ROCKET];
export const ALL_AGRICULTURE_RESOURCES = [WATER, WHEAT, CORN, BREAD];
export const ALL_STRUCTURES = [DRILL, MILL, REFINERY];