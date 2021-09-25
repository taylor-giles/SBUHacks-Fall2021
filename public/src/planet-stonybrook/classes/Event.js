
export const EVENT_CHANCE = 0.01;
export default class Event {
    constructor(name, description, imgSrc, duration, doEvent, finishEvent){
        this.name = name;
        this.description = description;
        this.imgSrc = imgSrc;
        this.doEvent = doEvent;
        this.finishEvent = finishEvent;
        this.duration = duration;
    }

    createModal(){
        // Format: img, title, descText, hook, buttonName, model
        this.model.createEventModal(this.imgSrc, this.name, this.description, "100px");
    }
}