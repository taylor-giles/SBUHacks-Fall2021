import Cost from "../classes/Cost.js";
import Resource from "../classes/Resource.js";
import * as STRUCTURES from "../resource-objects/Structures.js";
import {CORN} from './AgricultureResources.js';

export const INDUSTRY_NAME = "Industry";
export const ROCKS = new Resource("Rocks", "Rocks collected from the planet's surface", "../../../Images/New/Rock Card.png", "kg", INDUSTRY_NAME, null, null);

const METAL_COSTS = [new Cost(ROCKS, 5)];
export const METAL = new Resource("Metal", "Refined metal used for creating structures", "../../../Images/New/Metal Card.png", "kg", INDUSTRY_NAME, METAL_COSTS, null);

export const OIL = new Resource("Oil", "Crude oil extracted from the ground", "../../../Images/New/Oil Card.png", "L", INDUSTRY_NAME, null, [STRUCTURES.DRILL]);

const FUEL_COSTS = [new Cost(OIL, 5)];
export const FUEL = new Resource("Fuel", "Volatile rocket fuel", "../../../Images/New/Fuel Card.png", "L", INDUSTRY_NAME, FUEL_COSTS, [STRUCTURES.REFINERY]);

const ROCKET_COSTS = [new Cost(METAL, 50), new Cost(FUEL, 50), new Cost(CORN, 100)];
export const ROCKET = new Resource("Rocket", "Your ticket home!", "../../../Images/New/Rocket Card.png", "Rocket", INDUSTRY_NAME, ROCKET_COSTS, null);
export const ALL_INDUSTRY_RESOURCES = [ROCKS, METAL, OIL, FUEL, ROCKET];