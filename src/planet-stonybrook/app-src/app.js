import AppController from './AppController.js';
import AppModel from './AppModel.js';
//import ResourceManager from './ResourceManager'

/*
- Create resoource.js instance
- Add resource card to html
*/

export class App {
    constructor() {
        /* Create instances */
        this.controller = new AppController();
        this.model = new AppModel();

        /* Setup the components */
        this.controller.initController(this.model);
    }

    /**
     * startup function
     * 
     */
    launch() {
        console.log("Starting up the app");

        /* Setup all the tabs */
        this.model.createTabs();

        /* Now set the default tab - the industry tab */
        this.model.loadTab("industry");

        /* Initiate the handlers */
        this.controller.initHandlers();

        /* TODO: Call resource Manager  */
    }

}

/**
 * Entry function
 */
window.onload = function() {
    let app = new App();
    app.launch();
}