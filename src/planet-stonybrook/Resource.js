
/**
 * Resource.js
 * 
 * This class handles all information pertaining to in-game resources.
 * Properties:
 *      name: String - The name of the resource
 *      description: String - A description for the resource
 *      amount: Int - The quantity of this resource that the player currently holds
 *      imgSrc: String - The path to the source for this image
 *      card: Document element - The div card for this resource
 *      addFunc: Function - A callback function which is called when this resource's count is increased
 *      category: String - The name of the category that this resource belongs to
 *      passiveAmt: Number - The quantity of this resource that is passively accumulated every tick
 *      isPassive: Boolean - true if this resource is gained passively, false otherwise
 */
export default class Resource {
    constructor(name, description, imgSrc, category, isPassive, addFunc){
        /* From parameters */
        this.name = name;
        this.description = description;
        this.imgSrc = imgSrc;
        this.category = category;
        this.isPassive = isPassive;
        this.addFunc = addFunc;
        
        //Initialize amount to 0
        this.amount = 0;
        this.passiveAmt = 0;

        /* Create the card */
        this.card = this.createCard();
    }

    add(addAmount){
        this.amount += addAmount;
        this.updateCard();
    }

    subtract(subAmount){
        if(this.amount >= subAmount){
            this.amount -= subAmount;
            this.updateCard();
            return true;
        }
        return false;
    }

    /**
     * Refresh/update the content of the card for this resource
     */
    updateCard(){
        let amtText = document.getElementById(this.name + "-amt");
        amtText.innerHTML = this.amount;
    }

    createCard(){
        // Create card element as a horizontal layout div
        const card = document.createElement('div');
        card.classList = '';
        card.classList.add('resource-card');
        card.classList.add('horizontal-arrangement');

        //Create image
        const img = document.createElement('img');
        img.src = this.imgSrc;
        img.id = this.name + "-img";
        card.appendChild(img);

        //Create vertical container to store name and description
        const nameContainer = document.createElement('div');
        nameContainer.classList = '';
        nameContainer.classList.add('vertical-arrangement');

        //Create and add name text
        const nameText = document.createElement('div');
        nameText.id = this.name + "-name";
        nameText.innerHTML = this.name;
        nameContainer.appendChild(nameText);

        //Create and add description text
        const descText = document.createElement('div');
        descText.id = this.name + "-desc";
        descText.innerHTML = this.description;
        nameContainer.appendChild(descText);

        //Add name and description div
        card.appendChild(nameContainer);

        //Create and add div for amount
        const amtText = document.createTextNode(this.amount);
        amtText.id = this.name + "-amt";
        card.appendChild(amtText);

        //Create and add div for collection info/build button
        const buildDiv = document.createElement('div');
        buildDiv.id = this.name + "-build";
        card.appendChild(buildDiv);

        return card;
    }
}