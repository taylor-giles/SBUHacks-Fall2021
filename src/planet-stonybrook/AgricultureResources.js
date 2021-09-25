const AGRICULTURE_NAME = "Agriculture";

export const WATER = Resource("Water", "", "Images\\Water Card.png", AGRICULTURE_NAME, true, function(){
    WATER.add(1);
});

export const CORN = Resource("Corn", "", "Images\\Corn Card.png", AGRICULTURE_NAME, false, function(){
    if(WATER.subtract(2)){
        CORN.add(1);
    } else {
        //TODO: Show error message
    }
});

export const WHEAT = Resource("Wheat", "", "Images\\Wheat Card.png", AGRICULTURE_NAME, false, function(){
    if(WATER.subtract(4)){
        WHEAT.add(1);
    } else {
        //TODO: Show error message
    }
});

export const BREAD = Resource("Bread", "", "Images\\Bread Card.png", AGRICULTURE_NAME, false, function(){
    if(OIL.subtract(5)){
        FUEL.add(1);
    } else {
        //TODO: Show error message
    }
});