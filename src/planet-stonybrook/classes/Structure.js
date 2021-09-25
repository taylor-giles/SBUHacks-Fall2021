import {TICK_SPEED} from '../ResourceManager.js';


export default class Structure {
    constructor(name, description, imgSrc, attemptCreation){
        this.name = name;
        this.description = description;
        this.imgSrc = imgSrc;
        this.attemptCreation = attemptCreation;
        this.isCreated = false;
    }
}