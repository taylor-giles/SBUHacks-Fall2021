import Resource from "../classes/Resource.js";
import {CORN} from './AgricultureResources.js';

export const INDUSTRY_NAME = "Industry";
export const ROCKS = new Resource("Rocks", "Rocks collected from the planet's surface", "../../../Images/Rock Card.png", "kg", INDUSTRY_NAME, null);

const METAL_COSTS = [{"resource":ROCKS, "amount":3}];
export const METAL = new Resource("Metal", "Refined metal used for creating structures", "../../../Images/Metal Card.png", "kg", INDUSTRY_NAME, METAL_COSTS);

export const OIL = new Resource("Oil", "Crude oil extracted from the ground", "../../../Images/Oil Card.png", "L", INDUSTRY_NAME, null);

const FUEL_COSTS = [{"resource":OIL, "amount":5}]
export const FUEL = new Resource("Fuel", "Volatile rocket fuel", "../../../Images/Fuel Card.png", "L", INDUSTRY_NAME, FUEL_COSTS);

const ROCKET_COSTS = [{"resource":METAL, "amount":50}, {"resource":FUEL, "amount":30}, {"resource":CORN, "amount":100}];
export const ROCKET = new Resource("Rocket", "Your ticket home!", "../../../Images/Rocket Card.png", "Rocket", INDUSTRY_NAME, ROCKET_COSTS);
export const ALL_INDUSTRY_RESOURCES = [ROCKS, METAL, OIL, FUEL, ROCKET];