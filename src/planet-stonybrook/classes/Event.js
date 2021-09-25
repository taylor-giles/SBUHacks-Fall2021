export default class Event {
    constructor(name, description, imgSrc, duration, doEvent, finishEvent){
        this.name = name;
        this.description = description;
        this.imgSrc = imgSrc;
        this.doEvent = doEvent;
        this.finishEvent = finishEvent;
        this.duration = duration;
    }
}