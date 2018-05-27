import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  infoText: any = {
    hearthstone: '',
    project2: ''
  }

  ngOnInit() {
    this.infoText.hearthstone = `Hearthstone is an online card game which I have a love/hate (mostly hate) relationship with.
    People describe it as a cross between poker and chess, but I'm quite bitter about it and think it's mostly a
    random number generator in card form.
    From Wikipedia - The game is a turn-based card game between two opponents, 
    using constructed decks of 30 cards along with a selected hero with a unique power. 
    Players use their limited mana crystals to play abilities or summon minions to attack the opponent, with the goal of reducing the opponent's health to zero.`

    this.infoText.project2 = `Hearthstone is an online c`
  }

}
