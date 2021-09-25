import AppModel from "../app-src/AppModel.js";

export const part1 = '../../../images/Intro part 1.png';
export const part2 = '../../../images/Intro part 2.png';
export const part3 = '../../../images/Intro part 3.png';

export const runPart2 = function() {
    
}

export const runPart3 = function() {

}

export default class Intro {
    constructor(model) {
        this.model = model;
    }

    createIntro() {
        // Fromat: img, title, descText, hook, buttonName, model
        this.model.createEventModal(part1, "Part 1", "", null, "Continue", this.model);
        this.model.createEventModal(part1, "Part 2", "", null, "Continue", this.model);
        this.model.createEventModal(part1, "Part 3", "", null, "Continue", this.model);
    }
}
