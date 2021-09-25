import {CORN} from './AgricultureResources';

export const INDUSTRY_NAME = "Industry";
export const ROCKS = Resource("Rocks", "Rocks collected from the planet's surface", "Images\\Rock Card.png", INDUSTRY_NAME, true, function(){
    ROCKS.add(1)
});

export const METAL = Resource("Metal", "Refined metal used for creating structures", "Images\\Metal Card.png", INDUSTRY_NAME, false, function(){
    if(ROCKS.subtract(3)){
        METAL.add(1);
    } else {
        //TODO: Show error message
    }
});

export const OIL = Resource("Oil", "Crude oil extracted from the ground", "Images\\Oil Card.png", INDUSTRY_NAME, true, function(){
    OIL.add(1);
});

export const FUEL = Resource("Fuel", "Volatile rocket fuel", "Images\\Fuel Card.png", INDUSTRY_NAME, false, function(){
    if(OIL.subtract(5)){
        FUEL.add(1);
    } else {
        //TODO: Show error message
    }
});

export const ROCKET = Resource("Rocket", "Your ticket home!", "Images\\Rocket Card.png", INDUSTRY_NAME, false, function(){
    if(CORN.subtract(100) && METAL.subtract(50) && FUEL.subtract(30)){
        ROCKET.add(1);
        //TODO: Win!
    } else {
        //TODO: Show error message
    }
});