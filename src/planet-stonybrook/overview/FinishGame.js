import ResourceManager, { ALL_RESOURCES } from "../ResourceManager.js";

function finish(){
    ResourceManager.stopTime = true;
    for(let resource of ALL_RESOURCES){
        resource.disableButtons();
    }
}

export function gameLost() {
    finish();
    console.log("Game Lost");
}

export function gameWon() {
    finish();
    console.log("Game Won");
}
