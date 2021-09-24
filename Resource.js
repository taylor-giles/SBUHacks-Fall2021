
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
        // Create card element
        const card = document.createElement('div');
        card.classList = 'resource-card';

        //Create image
        const img = document.createElement('img')
        img.src = this.imgSrc
        img.id = this.name + "-img"
        card.appendChild(img)

        // Construct card content
        const content = 
            '<div class="resource-card">'+
                ''
            '</div>';

        
    }
}