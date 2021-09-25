/**
 * App controller class that handles all of the even handler listeners
 */

export default class AppController {
    constructor () {
        this.tab_names = ["industry", "agriculture", "structures", "robots", "overview"];
    }

    initController(appModel) {
        this.appModel = appModel;
        this.initHandlers();
    }

    initHandlers() {
        this.initTabs();
        this.initModal();
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

    initModal(){
        this.eventModal = document.getElementById("event-modal");
        this.modalClose = document.getElementsByClassName("close")[0];
        this.modalClose.onclick = function(){
            this.eventModal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == eventModal) {
              eventModal.style.display = "none";
            }
        }
        this.eventModal.style.display = "block";
    }
}
