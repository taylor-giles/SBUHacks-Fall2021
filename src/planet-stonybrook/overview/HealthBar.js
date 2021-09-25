import { gameLost } from "./FinishGame.js";

const startingHealth = 100;
const startingFood = 100;

export default class HealthBar {
    constructor () {
        this.health = startingHealth;  // Equals width of the status bar
        this.food = startingFood;

        this.health_status_bar = document.getElementById("health-status-bar");
        this.health_bar = document.getElementById("health-bar");
        this.health_bar_progress = document.getElementById("health-bar-progress");
    
        this.available_food = document.getElementById("available-food"); 
    
        this.setProgressWidth();
        this.setHealth();
    }
    
    /* Setting health amount */

    setProgressWidth() {
        this.health_bar_progress.style.width = this.health + '%';
        this.health_bar_progress.innerHTML = "Health: " + Math.floor(this.health * 1) + '%';
    }

    incrementHealth(amt) {
        this.health += amt;
        if(this.health >= startingHealth)
            this.health = startingHealth;

        this.setProgressWidth();
    }
    
    decrementHealth(amt) {
        this.health -= amt;
        if(this.health <= 0)
            this.health = 0;

        this.setProgressWidth();

        if(this.health === 0)
            gameLost();
    }

    /* Changing Food amt  */ 
    setHealth() {
        this.available_food.innerHTML = "Avail. Food: " + (this.food * 1);
    }

    incrementFood(amt) {
        this.food += amt;
        this.setHealth(); 
    }

    decrementFood(amt) {
        this.food -= amt;

        if(this.food < 0) {
            this.food = 0;
        }

        this.setHealth();
    }


}