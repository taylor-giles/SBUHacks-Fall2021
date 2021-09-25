import Resource from "./Resource.js";

const AGRICULTURE_NAME = "Agriculture";

export const WATER = new Resource("Water", "", "../../images/Water Card.png", AGRICULTURE_NAME, true, function(){
    WATER.add(1);
});

export const CORN = new Resource("Corn", "", "Images\\Corn Card.png", AGRICULTURE_NAME, false, function(){
    if(WATER.subtract(2)){
        CORN.add(1);
    } else {
        //TODO: Show error message
    }
});

export const WHEAT = new Resource("Wheat", "", "Images\\Wheat Card.png", AGRICULTURE_NAME, false, function(){
    if(WATER.subtract(4)){
        WHEAT.add(1);
    } else {
        //TODO: Show error message
    }
});

export const BREAD = new Resource("Bread", "", "Images\\Bread Card.png", AGRICULTURE_NAME, false, function(){
    if(OIL.subtract(5)){
        FUEL.add(1);
    } else {
        //TODO: Show error message
    }
});