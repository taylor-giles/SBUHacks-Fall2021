import { HEALTH_BAR } from "../resource-objects/OverviewObjects.js";


export const TICK_SPEED = 100;

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
 *      costs: Array of {"resource", "amount"} - The costs to produce this resource
 *      passiveAmt: Number - The quantity of this resource that is passively accumulated every tick
 *      costs: Boolean - true if this resource is gained passively, false otherwise
 */
export default class Resource {
    constructor(name, description, imgSrc, unitName, category, passiveAmt, foodAmt, costs, requiredStructures){
        /* From parameters */
        this.name = name;
        this.description = description;
        this.imgSrc = imgSrc;
        this.unitName = unitName;
        this.category = category;
        this.costs = costs;
        this.requiredStructures = requiredStructures;
        this.passiveAmt = passiveAmt;
        this.foodAmt = foodAmt;
        
        //Initialize amount to 0
        this.amount = 0;

        /* Create the card */
        this.card = this.createCard();
    }

    disableButtons(){
        this.eatButton.onmousedown = (ev) => {}
        this.createButton.onmousedown = (ev) => {}
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

    //If the depleteAmount cannot be subtracted from this resource, set this resource amount to 0
    deplete(depleteAmount){
        if(!this.subtract(depleteAmount)){
            this.amount = 0;
        }
        this.updateCard();
    }

    canAfford(){
        if(this.costs){
            for(let cost of this.costs){
                if(cost.resource.amount < cost.amount){
                    return false;
                }
            }
        } 
        if(this.requiredStructures){
            for(let structure of this.requiredStructures){
                if(!structure.isCreated){
                    return false;
                }
            }
        }
        
        return true;
    }

    create(amount=1){ 
        //console.log("Creating " + this.name);
        if(this.canAfford()){
            if(this.costs){
                for(let cost of this.costs){
                    cost.resource.subtract(cost.amount);
                }
            }
            this.add(amount);
        } else {
            //TODO: Say "you cant afford this"
        }
    }

    /**
     * Refresh/update the content of the card for this resource
     */
    updateCard(){
        //let amtText = document.getElementById(""+this.name + "-amt");
        this.amtText.innerHTML = this.amount + " " + this.unitName;
        if(!this.costs){
            let ticksPerSec = 1000 / TICK_SPEED;
            this.buttonsDiv.innerHTML = (this.passiveAmt * ticksPerSec) + "/sec.";
        }
    }

    createCard(){
        // Create card element as a horizontal layout div
        const card = document.createElement('div');
        card.id = this.name + "-card";
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
        nameContainer.classList.add('description-container');

        //Create and add name text
        const nameText = document.createElement('div');
        nameText.id = this.name + "-name";
        nameText.innerHTML = this.name;
        nameText.classList = 'name-text';
        nameContainer.appendChild(nameText);

        //Create and add description text
        const descText = document.createElement('div');
        descText.id = this.name + "-desc";
        descText.innerHTML = this.description;
        descText.classList = 'description-text';
        nameContainer.appendChild(descText);

        //Add name and description div
        card.appendChild(nameContainer);

        //Create and add spacer div
        const spacer = document.createElement('div');
        spacer.id = this.name + "-spacer";
        spacer.classList = 'spacer';
        card.appendChild(spacer);

        //Create and add div for amount
        const amtText = document.createElement('div');
        amtText.id = this.name + "-amt";
        amtText.innerHTML = this.amount + " " + this.unitName;
        amtText.classList = 'amount-text';
        this.amtText = amtText;
        card.appendChild(amtText);

        //Create div for collection info/build button
        const buildDiv = document.createElement('div');
        buildDiv.id = this.name + "-build";
        buildDiv.classList = 'build-container';
        buildDiv.classList.add('vertical-arrangement');

        //Create div for cost display
        const costDiv = document.createElement('div');
        costDiv.id = this.name + "-cost";
        costDiv.classList = 'cost-text';

        //Create div for create button or passive rate display
        const buttonsDiv = document.createElement('div');
        buttonsDiv.id = this.name + "-buttons";
        this.buttonsDiv = buttonsDiv;

        let costString = "";
        if(!this.costs){
            let ticksPerSec = 1000 / TICK_SPEED;
            costString = "Passive Collection<br />";
            buttonsDiv.innerHTML = (this.passiveAmt * ticksPerSec) + "/sec.";
        } else {
            //Update cost display
            costString = "Cost: ";
            for(let cost of this.costs){
                costString += cost.amount + " " + cost.resource.unitName + " " + cost.resource.name;
                costString += "<br />";
            }

            //If needed, create and add "eat" button
            if(this.foodAmt > 0){
                const eatButton = document.createElement('button');
                eatButton.id = this.name + "-btn_eat";
                eatButton.innerHTML = "Eat (+" + this.foodAmt + " HP)";
                eatButton.classList = 'create-button';
                eatButton.onmousedown = (ev) => {
                    this.subtract(1);
                    HEALTH_BAR.decrementFood(this.foodAmt);
                    HEALTH_BAR.incrementHealth(this.foodAmt);
                }
                this.eatButton = eatButton;
                buttonsDiv.appendChild(eatButton);
            }

            //Create and add "create" button
            const createButton = document.createElement('button');
            createButton.id = this.name + "-btn_create";
            createButton.innerHTML = "Create";
            createButton.classList = 'create-button';
            createButton.onmousedown = (ev) => {this.create();} 
            this.createButton = createButton;
            buttonsDiv.appendChild(createButton);
        }
        //Update cost display with structure requirements
        if(this.requiredStructures){
            costString += "Requires: ";
            for(let structure of this.requiredStructures){
                costString += structure.name;
                costString += "<br />";
            }
        }
        costDiv.innerHTML = costString.substring(0, costString.length - 6);

        buildDiv.appendChild(costDiv);
        buildDiv.appendChild(buttonsDiv);
        card.appendChild(buildDiv);

        return card;
    }
}