export class Helpers {
    constructor() {
        
    }

    createTextNodeInDiv(text, textId=undefined, divId=undefined){
        let div = document.createElement('div');
        if(divID){
            div.id = divId;
        }

        let textNode = document.createTextNode(text);
        if(textID){
            textNode.id = textId;
        }

        div.appendChild(textNode);
        return div;
    }
}