import { Component, OnInit, Input } from '@angular/core';
import { HearthstoneService } from '../../../services/hearthstone/hearthstone.service';
import { HttpParams } from '@angular/common/http';
import { cards } from './interfaces/cardsCollection';

@Component({
  selector: 'app-hearthstone',
  templateUrl: './hearthstone.component.html',
  styleUrls: ['./hearthstone.component.css'],
  providers: [HearthstoneService]
})

export class HearthstoneComponent implements OnInit {

  private loading = {
    allInfo: false,
    cards: false
  };

  private info: any = {
    header: '',
    body: '',
    footer: '',
    website: ''
  }
  
  private cardInfo = {}
  private cards = {}
  private cardsToDisplay: any = [];
  private error: any = {};

  constructor() { }

ngOnInit() {
    this.info.header = 'Hearthstone';
    this.info.body = `Hearthstone is an online card game, designed by Blizzard, which I have a love/hate (mostly hate) relationship with.
    People describe it as a cross between poker and chess, but I'm quite bitter about it and think it's mostly a
    random number generator in card form.
    From Wikipedia: the game is a turn-based card game between two opponents, 
    using constructed decks of 30 cards along with a selected hero with a unique power. 
    Players use their limited mana crystals to play abilities or summon minions to attack the opponent, with the goal of reducing the opponent's health to zero.`
    this.info.footer = 'For more information, visit ';
    this.info.website = 'https://playhearthstone.com';
  }

  // isCardCollection(object: any): object is cards {
  //   // really basic check to see if event is card collection...
  //   return 'Basic' in object || object[0];
  // }

  cardsChanged(event) {
    
    // console.log(event);
    this.error = {};

    if(event.error) {
      this.cardsToDisplay = [];
      this.error = {
        error: event.error,
        message: event.message
      }
      return;
    }
    // flatten data object into more usable format
    if(event.dataBy) {
      let cardsArray = [];
      if(event.dataBy==='set') {
  
        Object.keys(event).forEach(function(set) {
          if(set!=='dataBy') {
            event[set].forEach(function(card) {
              cardsArray.push(card)
            })
          }
        })
  
      } else if(event.dataBy==='card'){
          cardsArray = event;
      }
      this.cardsToDisplay = cardsArray;
    }
  }

}
