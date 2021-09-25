import Resource from './Resource.js'
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

        workspace.appendChild();

    }

}

/**
 * Entry function
 */
window.onload = function() {
    let app = new App();
    app.launch();
}