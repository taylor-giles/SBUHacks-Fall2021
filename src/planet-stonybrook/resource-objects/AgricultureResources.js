import Resource from "../classes/Resource.js";

const AGRICULTURE_NAME = "Agriculture";

export const WATER = new Resource("Water", "", "../../images/Water Card.png", "L", AGRICULTURE_NAME, null);

const CORN_COSTS = [{"resource":WATER, "amount":2}];
export const CORN = new Resource("Corn", "", "../../../Images/Corn Card.png", "Cobs", AGRICULTURE_NAME, CORN_COSTS);

const WHEAT_COSTS = [{"resource":WATER, "amount":4}];
export const WHEAT = new Resource("Wheat", "", "../../../Images/Wheat Card.png", "kg", AGRICULTURE_NAME, WHEAT_COSTS);

const BREAD_COSTS = [{"resource":WATER, "amount":15}, {"resource":WHEAT, "amount":5}];
export const BREAD = new Resource("Bread", "", "../../../Images/Bread Card.png", "Loaves", AGRICULTURE_NAME, BREAD_COSTS);

export const ALL_AGRICULTURE_RESOURCES = [WATER, CORN, WHEAT, BREAD];