import ResourceManager, { ALL_RESOURCES } from "../ResourceManager.js";

function finish(){
    ResourceManager.stopTime = true;
    for(let resource of ALL_RESOURCES){
        resource.disableButtons();
    }
}

function createExitModal(src, title, num) {
    let doc = document.getElementById("planet-workspace");
    let root = document.getElementById("root");
   
    const centering = document.createElement('div');
    centering.id = "modal-" + num + "-centering";
    centering.classList.add("centered-arrangement");

    const modal = document.createElement('div');
    modal.id = "modal-" + num; 
    
    const vert = document.createElement('div');
    vert.id = "mod-vert-" + num;
    vert.classList.add("vertical-arrangement");

    const horiz = document.createElement('div');
    horiz.id = "mod-horiz-" + num;
    horiz.classList.add("horizontal-arrangement");

    const img = document.createElement('img');
    img.src = src;
    img.id = "mod-" + num + "-img";

    //Create and add description text
    const titleText = document.createElement('div');
    titleText.id = "mod-" + num + "-title";
    titleText.innerHTML = title;
    titleText.classList.add('title-text');
    
    const createButton = document.createElement('button');
    createButton.id = num + "-btn_create";
    createButton.innerHTML = "CONTINUE";
    createButton.classList = 'create-button';
    
    createButton.onmousedown = (ev) => {window.location.reload();}     

    modal.appendChild(vert);

    vert.appendChild(img);
    vert.appendChild(titleText);
    vert.appendChild(createButton);

    centering.appendChild(modal);

    doc.innerHTML = "";
    doc.appendChild(centering);
}

export function gameLost() {
    //finish();
    createExitModal('../../../images/New/Lose Screen.png', "YOU LOSE :(", 1);
    console.log("Game Lost");
}

export function gameWon() {
    //finish();
    createExitModal('../../../images/New/Win Screen.png', "YOU WIN!", 2);
    console.log("Game Won");
}