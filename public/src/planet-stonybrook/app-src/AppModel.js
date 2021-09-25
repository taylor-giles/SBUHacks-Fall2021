import * as OBJECTS from '../resource-objects/GameplayObjects.js';
import Modal from '../modal/Modal.js'
import ResourceManager from '../ResourceManager.js';

export default class AppModel {
    constructor () {
        this.workspace = document.getElementById("planet-workspace");
        
        /* Holds the div containing the tab */
        this.tabs = [];

        this.currentTab = null;
    }

    loadDefault() {
        this.loadTab("industry");
        ResourceManager.stopTime = false;
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
            this.workspace.innerHTML = "";
            // let old_tab = this.tabs[this.currentTab];
            // if(this.workspace.contains(old_tab)){
            //     this.workspace.removeChild(old_tab);
            // }
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

        const yuck = new Modal('../../../Images/New/WIP.png', "Work in progress...", "We were very very ambitious", null, "Exit", this, null);
        const blah = yuck.createModal();

        this.tabs["robots"] = blah;
        /* TODO: */
    }

    createOverview() {
        const cards = document.createElement('div');
        cards.id = "overview-tab-container";

        const yuck = new Modal('../../../Images/New/WIP.png', "Work in progress...", "We were very very ambitious", null, "Exit", this, null);
        const blah = yuck.createModal();
        
        this.tabs["overview"] = blah;
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

    createEventModal(img, title, desc, imgSize) {
        const modal = document.createElement('div');
        modal.id = "modal-tab";

        // Fromat: img, title, descText, hook, buttonName, model
        //const yuck = new Modal("../../../images/Bread Card.png","TITLE", "HELLO", null, "Exit", this);
        
        const yuck = new Modal(img, title, desc, null, "Exit", this, imgSize);
        const blah = yuck.createModal();

        modal.appendChild(blah);

        this.tabs["eventModal"] = modal;
        this.loadTab("eventModal");
    }

    createTabs() {
        this.createIndustry();
        this.createAgriculture();
        this.createStructures();
        this.createRobots();
        this.createOverview();
    }
}