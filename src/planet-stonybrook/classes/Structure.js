
export default class Structure {
    constructor(name, description, imgSrc, costs){
        this.name = name;
        this.description = description;
        this.imgSrc = imgSrc;
        this.costs = costs;
        this.isCreated = false;
        this.card = this.createCard();
    }
    
    canAfford(){
        if(this.costs){
            for(let cost of this.costs){
                if(cost.resource.amount < cost.amount){
                    return false;
                }
            }
            return true;
        } else {
            return true;
        }
    }

    create(){ 
        console.log("Creating " + this.name);
        if(this.canAfford()){
            for(let cost of this.costs){
                cost.resource.subtract(cost.amount);
            }
            this.add(1);
        } else {
            //TODO: Say "you cant afford this"
        }
    }

    createCard(){
        // Create card element as a horizontal layout div
        const card = document.createElement('div');
        card.id = this.name + "-card";
        card.classList = '';
        card.classList.add('structure-card');
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

        //Create div for cost info/build button
        const buildDiv = document.createElement('div');
        buildDiv.id = this.name + "-build";

        //Create div for cost display
        const costDiv = document.createElement('div');
        costDiv.id = this.name + "-cost";
        costDiv.classList = 'cost-text';

        //Create div for create button
        const createDiv = document.createElement('div');
        createDiv.id = this.name + "-create";

        //Update cost display
        let costString = "Cost: ";
        for(let cost of this.costs){
            costString += cost.amount + " " + cost.resource.name;
            costString += "<br />";
        }
        costDiv.innerHTML = costString.substring(0, costString.length - 6);

        //Create and add "create" button
        const createButton = document.createElement('img');
        createButton.id = this.name + "-btn_create";
        createButton.src = "../../../Images/New/Create.png"
        createDiv.appendChild(createButton);
        
        buildDiv.appendChild(costDiv);
        buildDiv.appendChild(createDiv);
        buildDiv.classList = 'build-container';
        buildDiv.classList.add('vertical-arrangement');
        
        card.appendChild(buildDiv);

        return card;
    }
}