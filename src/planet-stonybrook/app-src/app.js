import Resource from '../classes/Resource.js'
import Structure from '../classes/Structure.js'
import * as INDUSTRY_RESOURCES from '../resource-objects/IndustryResources.js'
//import ResourceManager from './ResourceManager'

/*
- Create resoource.js instance
- Add resource card to html
*/

export class App {
    constructor() {
        
    }

    /**
     * startup function
     * 
     */
    launch() {
        console.log("Starting up the app");
        
        /* Test creating the resource instance */
        let workspace = document.getElementById("workspace-edit");

        workspace.appendChild(INDUSTRY_RESOURCES.ROCKS.card);
        workspace.appendChild(INDUSTRY_RESOURCES.METAL.card);
        workspace.appendChild(INDUSTRY_RESOURCES.ROCKET.card);
        
    }

}

/**
 * Entry function
 */
window.onload = function() {
    let app = new App();
    app.launch();
}