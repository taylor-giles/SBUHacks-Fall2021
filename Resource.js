
/**
 * Resource.js
 * 
 * This class handles all information pertaining to 
 */
export default class Resource {
    constructor(name, description, imgSrc){
        //Initialize amount to 0
        this.amount = 0;
    }

    add(addAmount){
        this.amount += addAmount;
    }

    subtract(subAmount){
        this.amount -= subAmount;
    }

    createCard(){
        // Create card element as a horizontal layout div
        const card = document.createElement('div');
        card.setAttribute('horizontal', '');  
        card.setAttribute('layout', '');
        card.classList = 'resource-card';

        //Create image
        const img = document.createElement('img')
        img.src = this.imgSrc
        img.id = this.name + "-img"
        card.appendChild(img)

        //Create vertical container to store name and description
        const nameContainer = document.createElement('div');
        nameContainer.setAttribute('vertical', '');
        nameContainer.setAttribute('layout', '');

        //Create and add name text
        const nameText = document.createElement('div');
        nameText.id = this.name + "-name";
        nameText.innerHTML = this.name;
        nameContainer.appendChild(nameText);

        //Create and add description text
        const descText = document.createElement('div');
        descText.id = this.name + "-desc";
        descText.innerHTML = this.desc;
        nameContainer.appendChild(descText);

        //Add name and description div
        card.appendChild(nameContainer);

        //Create and add div for amount
        const amtText = document.createElement('div');
        amtText.id = this.name + "-amt";
        amtText.innerHTML = this.amount;
        card.appendChild(amtText);

        //Create and add div for collection info/build button
        const buildDiv = document.createElement('div');
        buildDiv.id = this.name + "-build";
        card.appendChild(buildDiv);

        return card;
    }
}