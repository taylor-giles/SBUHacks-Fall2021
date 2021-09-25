import * as OBJECTS from '../resource-objects/GameplayObjects.js';
import Modal from '../modal/Modal.js'

export default class AppModel {
    constructor () {
        this.workspace = document.getElementById("planet-workspace");
        
        /* Holds the div containing the tab */
        this.tabs = [];

        this.currentTab = null;
    }

    loadDefault() {
        this.loadTab("industry");
    }

    loadTab(tab_name) {
        console.log("Setting tab to be " + tab_name);

        /* Do nothing if the same name */
        if(tab_name === this.currentTab) 
            return;

        let new_tab = this.tabs[tab_name];

        if(!new_tab)
            return;

        if(this.currentTab !== null) {
            let old_tab = this.tabs[this.currentTab];
            this.workspace.removeChild(old_tab);
        }
        
        /* Set current open tab */
        this.workspace.appendChild(new_tab);
        this.currentTab = tab_name;
    }

    createIndustry() {
        const cards = document.createElement('div');
        cards.id = "industry-tab-container";

        for(let industry_resource of OBJECTS.ALL_INDUSTRY_RESOURCES) {
            cards.appendChild(industry_resource.card);
        }
    
        this.tabs["industry"] = cards;
    }

    createAgriculture() {
        const cards = document.createElement('div');
        cards.id = "agriculture-tab-container";

        for(let agriculture_resource of OBJECTS.ALL_AGRICULTURE_RESOURCES) {
            cards.appendChild(agriculture_resource.card);
        }
    
        this.tabs["agriculture"] = cards;
    }

    createStructures() {
        const cards = document.createElement('div');
        cards.id = "structures-tab-container";

        for(let structure of OBJECTS.ALL_STRUCTURES) {
            cards.appendChild(structure.card);
        }
    
        this.tabs["structures"] = cards;
        /* TODO: */
    }

    createRobots() {
        const cards = document.createElement('div');
        cards.id = "robots-tab-container";
    
        /* TODO: */
    }

    createOverview() {
        const cards = document.createElement('div');
        cards.id = "overview-tab-container";
    
        /* TODO: */
    }

    createIntroModal(img, title, desc, hook, btnName) {
        const modal = document.createElement('div');
        modal.id = "modal-tab";

        // Fromat: img, title, descText, hook, buttonName, model
        //const yuck = new Modal("../../../images/Bread Card.png","TITLE", "HELLO", null, "Exit", this);
        
        const yuck = new Modal(img, title, desc, hook, btnName, this, null);
        const blah = yuck.createModal();

        modal.appendChild(blah);

        this.tabs["introModal"] = modal;
        this.loadTab("introModal");
    }

    createEventModal(img, title, desc) {
        const modal = document.createElement('div');
        modal.id = "modal-tab";

        // Fromat: img, title, descText, hook, buttonName, model
        //const yuck = new Modal("../../../images/Bread Card.png","TITLE", "HELLO", null, "Exit", this);
        
        const yuck = new Modal(img, title, desc, null, "Exit", this, "102px");
        const blah = yuck.createModal();

        modal.appendChild(blah);

        this.tabs["eventModal"] = modal;
        this.loadTab("eventModal");
    }

    createIntro() {
        const part1 = '../../../images/Intro part 1.png';
        const part2 = '../../../images/Intro part 2.png';
        const part3 = '../../../images/Intro part 3.png';
    
        
    }

    createTabs() {
        this.createIndustry();
        this.createAgriculture();
        this.createStructures();
        this.createStructures();
        this.createOverview();
    }
}