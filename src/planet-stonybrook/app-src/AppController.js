/**
 * App controller class that handles all of the even handler listeners
 */

export default class AppController {
    constructor () {
        this.tab_names = ["industry", "agriculture", "structures", "overview"];
    }

    initController(appModel) {
        this.appModel = appModel;
        this.initHandlers();
    }

    /* Initiate the Tab clicking ability */
    initTabs() {
        for(let tab_name of this.tab_names) {
            let tab_id = "" + tab_name + "-tab";
            let button = document.getElementById(tab_id);

            button.onmousedown = (event) => {
                /* Update the list currently viewed */
                this.appModel.loadTab(tab_name);
            }
            
        }
    }


    initHandlers() {
        this.initTabs();
    }
}
