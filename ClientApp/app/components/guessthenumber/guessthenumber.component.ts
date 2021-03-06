﻿import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './guessthenumber.component.html'
})
export class GuessTheNumberComponent {
    deviation: number;
    noOfTries: number;
    original: number;
    guess: number;
    constructor() {
        this.initializeGame();
    }
    initializeGame() {
        this.noOfTries = 0;
        this.original = Math.floor((Math.random() * 1000) + 1);
        this.guess = null;
        this.deviation = null;
    }
    verifyGuess() {
        this.deviation = this.original - this.guess;
        this.noOfTries = this.noOfTries + 1;
    }
}