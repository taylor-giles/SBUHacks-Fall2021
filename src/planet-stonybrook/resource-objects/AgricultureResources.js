import Cost from "../classes/Cost.js";
import Resource from "../classes/Resource.js";
import * as STRUCTURES from "./Structures.js";

const AGRICULTURE_NAME = "Agriculture";

export const WATER = new Resource("Water", "", "../../images/New/Water Card.png", "L", AGRICULTURE_NAME, null, null);

const CORN_COSTS = [new Cost(WATER, 2)];
export const CORN = new Resource("Corn", "", "../../../Images/New/Corn Card.png", "Cobs", AGRICULTURE_NAME, CORN_COSTS, null);

const WHEAT_COSTS = [new Cost(WATER, 4)];
export const WHEAT = new Resource("Wheat", "", "../../../Images/New/Wheat Card.png", "kg", AGRICULTURE_NAME, WHEAT_COSTS, [STRUCTURES.MILL]);

const BREAD_COSTS = [new Cost(WATER, 15), new Cost(WHEAT, 5)];
export const BREAD = new Resource("Bread", "", "../../../Images/New/Bread Card.png", "Loaves", AGRICULTURE_NAME, BREAD_COSTS, null);

export const ALL_AGRICULTURE_RESOURCES = [WATER, WHEAT, CORN, BREAD];