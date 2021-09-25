export default class Modal {
    constructor(img, title, descText, hook, buttonName, model) {
        this.count = 1;
        this.src = img;
        this.title = title;
        this.descText = descText;
        this.hook = hook;
        this.buttonName = buttonName;

        this.model = model;

        this.modal = null;
    }

    createModal() {
        const centering = document.createElement('div');
        centering.id = "modal-" + this.count + "-centering";
        centering.classList.add("centered-arrangement");

        const modal = document.createElement('div');
        modal.id = "modal-" + this.count; 
        
        const vert = document.createElement('div');
        vert.id = "mod-vert-" + this.count;
        vert.classList.add("vertical-arrangement");

        const horiz = document.createElement('div');
        horiz.id = "mod-horiz-" + this.count;
        horiz.classList.add("horizontal-arrangement");

        const img = document.createElement('img');
        img.src = this.src;
        img.id = "mod-" + this.count + "-img";

        //Create and add description text
        const titleText = document.createElement('div');
        titleText.id = "mod-" + this.count + "-title";
        titleText.innerHTML = this.title;
        titleText.classList.add('title-text');

        //Create and add description text
        const descText = document.createElement('div');
        descText.id = "mod-" + this.count + "-desc";
        descText.innerHTML = this.descText;
        descText.classList.add('description-text');

        const but = document.createElement('button');
        descText.id = "mod-" + this.count + "-button";
        
        const createButton = document.createElement('button');
        createButton.id = this.name + "-btn_create";
        createButton.innerHTML = this.buttonName;
        createButton.classList = 'create-button';
        if(!this.hook) {
            createButton.onmousedown = (ev) => {this.model.loadDefault();}     
        }
        else {
            createButton.onmousedown = (ev) => {this.hook();} 
        }

        modal.appendChild(vert);

        vert.appendChild(img);
        vert.appendChild(titleText);
        vert.appendChild(descText);
        vert.appendChild(createButton);

        centering.appendChild(modal);

        this.count += 1;

        this.modal = centering;

        return this.modal;
    }
}
