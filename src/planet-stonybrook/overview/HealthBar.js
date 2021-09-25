import { gameLost } from "./FinishGame.js";

const startingHealth = 100;

export default class HealthBar {
    constructor () {
        this.health = startingHealth;  // Equals width of the status bar

        this.health_status_bar = document.getElementById("health-status-bar");
        this.health_bar = document.getElementById("health-bar");
        this.health_bar_progress = document.getElementById("health-bar-progress");
    }

    setWidth() {
        this.health_bar_progress.style.width = this.health + '%';
        this.health_bar_progress.innerHTML = this.health * 1 + '%';
    }

    incrementHealth(amt) {
        this.health += amt;
        if(this.health >= startingHealth)
            this.health = startingHealth;

        this.setWidth();
    }
    
    decrementHealth(amt) {
        this.health -= amt;
        if(this.health <= 0)
            this.health = 0;

        this.setWidth();

        if(this.health === 0)
            gameLost();
    }


}