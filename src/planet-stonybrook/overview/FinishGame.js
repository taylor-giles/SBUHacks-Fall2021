import ResourceManager from "../ResourceManager.js";

export function gameLost() {
    ResourceManager.stopTime = true;
    console.log("Game Lost");
}

export function gameWon() {
    ResourceManager.stopTime = true;
    console.log("Game Won");
}
