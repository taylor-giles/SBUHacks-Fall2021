import * as INDUSTRY_RESOURCES from '../resource-objects/IndustryResources.js'
import * as AGRICULTURE_RESOURCES from '../resource-objects/AgricultureResources.js'

export default class AppModel {
    constructor () {
        this.workspace = document.getElementById("planet-workspace");
        
        /* Holds the div containing the tab */
        this.tabs = [];

        this.currentTab = null;
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

        for(let industry_resource of INDUSTRY_RESOURCES.ALL_INDUSTRY_RESOURCES) {
            cards.appendChild(industry_resource.card);
        }
    
        this.tabs["industry"] = cards;
    }

    createAgriculture() {
        const cards = document.createElement('div');
        cards.id = "agriculture-tab-container";

        for(let agriculture_resource of AGRICULTURE_RESOURCES.ALL_AGRICULTURE_RESOURCES) {
            cards.appendChild(agriculture_resource.card);
        }
    
        this.tabs["agriculture"] = cards;
    }

    createStructures() {
        const cards = document.createElement('div');
        cards.id = "structures-tab-container";

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

    createTabs() {
        this.createIndustry();
        this.createAgriculture();
        this.createStructures();
        this.createStructures();
        this.createOverview();
    }
}