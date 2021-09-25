import * as INDUSTRY_RESOURCES from '../resource-objects/IndustryResources.js'

export default class AppModel {
    constructor () {
        this.workspace = document.getElementById("planet-workspace");
        
        /* Holds the div containing the tab */
        this.tabs = [];

        this.currentTab = null;
    }

    loadTab(tab_name) {
        let new_tab = this.tabs[tab_name];

        if(this.currentTab != null) {
            let old_tab = this.tabs[this.currentTab];
            this.workspace.removeChild(old_tab);
        }
        
        /* Set current open tab */
        this.workspace.appendChild(new_tab);
        this.currentTab = tab_name;
    }

    createIndustry() {
        const cards = document.createElement('div');
        cards.id = "Industry-tab-container";

        for(let industry_resource of INDUSTRY_RESOURCES.ALL_INDUSTRY_RESOURCES) {
            cards.appendChild(industry_resource.card);
        }
    
        this.tabs["industry"] = cards;
    }

    createAgriculture() {

    }

    createStructures() {

    }

    createOverview() {

    }

    createTabs() {
        this.createIndustry();
        this.createAgriculture();
        this.createStructures();
        this.createStructures();
        this.createOverview();
    }
}