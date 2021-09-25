import AppModel from "../app-src/AppModel.js";
import { App } from "../app-src/app.js";

export const part1 = '../../../Images/Intro part 1.png';
export const part2 = '../../../Images/Intro part 2.png';
export const part3 = '../../../Images/Intro part 3.png';

export default class Intro {
    constructor(model, app) {
        this.model = model;
        this.doc = this.model.workspace;
        this.app = app;
    }

    createIntro() {
        // Fromat: img, title, descText, hook, buttonName, model
        this.createIntroModal1(part1, "Part 1", 1);
    }

    createIntroModal1(src, title, num) {
        const centering = document.createElement('div');
        centering.id = "modal-" + num + "-centering";
        centering.classList.add("centered-arrangement");

        const modal = document.createElement('div');
        modal.id = "modal-" + num; 
        
        const vert = document.createElement('div');
        vert.id = "mod-vert-" + num;
        vert.classList.add("vertical-arrangement");

        const horiz = document.createElement('div');
        horiz.id = "mod-horiz-" + num;
        horiz.classList.add("horizontal-arrangement");

        const img = document.createElement('img');
        img.src = src;
        img.id = "mod-" + num + "-img";

        //Create and add description text
        const titleText = document.createElement('div');
        titleText.id = "mod-" + num + "-title";
        titleText.innerHTML = title;
        titleText.classList.add('title-text');
        
        const createButton = document.createElement('button');
        createButton.id = num + "-btn_create";
        createButton.innerHTML = "CONTINUE";
        createButton.classList = 'create-button';
        
        createButton.onmousedown = (ev) => {this.createIntroModal2(part2, "Part 2", 2);}     


        modal.appendChild(vert);

        vert.appendChild(img);
        vert.appendChild(titleText);
        vert.appendChild(createButton);

        centering.appendChild(modal);

        this.doc.innerHTML = "";
        this.doc.appendChild(centering);

    }

    createIntroModal2(src, title, num) {
        const centering = document.createElement('div');
        centering.id = "modal-" + num + "-centering";
        centering.classList.add("centered-arrangement");

        const modal = document.createElement('div');
        modal.id = "modal-" + num; 
        
        const vert = document.createElement('div');
        vert.id = "mod-vert-" + num;
        vert.classList.add("vertical-arrangement");

        const horiz = document.createElement('div');
        horiz.id = "mod-horiz-" + num;
        horiz.classList.add("horizontal-arrangement");

        const img = document.createElement('img');
        img.src = src;
        img.id = "mod-" + num + "-img";

        //Create and add description text
        const titleText = document.createElement('div');
        titleText.id = "mod-" + num + "-title";
        titleText.innerHTML = title;
        titleText.classList.add('title-text');
        
        const createButton = document.createElement('button');
        createButton.id = num + "-btn_create";
        createButton.innerHTML = "CONTINUE";
        createButton.classList = 'create-button';
        
        createButton.onmousedown = (ev) => {this.createIntroModal3(part3, "Part 3", 2);}

        modal.appendChild(vert);

        vert.appendChild(img);
        vert.appendChild(titleText);
        vert.appendChild(createButton);

        centering.appendChild(modal);

        this.doc.innerHTML = "";
        this.doc.appendChild(centering);

    }

    createIntroModal3(src, title, num) {
        const centering = document.createElement('div');
        centering.id = "modal-" + num + "-centering";
        centering.classList.add("centered-arrangement");

        const modal = document.createElement('div');
        modal.id = "modal-" + num; 
        
        const vert = document.createElement('div');
        vert.id = "mod-vert-" + num;
        vert.classList.add("vertical-arrangement");

        const horiz = document.createElement('div');
        horiz.id = "mod-horiz-" + num;
        horiz.classList.add("horizontal-arrangement");

        const img = document.createElement('img');
        img.src = src;
        img.id = "mod-" + num + "-img";

        //Create and add description text
        const titleText = document.createElement('div');
        titleText.id = "mod-" + num + "-title";
        titleText.innerHTML = title;
        titleText.classList.add('title-text');
        
        const createButton = document.createElement('button');
        createButton.id = num + "-btn_create";
        createButton.innerHTML = "EXIT";
        createButton.classList = 'create-button';

        createButton.onmousedown = (ev) => {
            this.doc.innerHTML="";
            this.app.launch();
        } 
        

        modal.appendChild(vert);

        vert.appendChild(img);
        vert.appendChild(titleText);
        vert.appendChild(createButton);

        centering.appendChild(modal);

        this.doc.innerHTML = "";
        this.doc.appendChild(centering);
    }
}
