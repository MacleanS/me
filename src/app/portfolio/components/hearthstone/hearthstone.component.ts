import { Component, OnInit } from '@angular/core';
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

  private cardInfo = {}
  private cards = {}
  private cardsToDisplay: any = [];

  constructor() { }

  ngOnInit() {
    // this.getCard();
  }

  isCardCollection(object: any): object is cards {
    // really basic check to see if event is card collection...
    return 'Basic' in object;
  }

  cardsChanged(event) {
    // flatten data object into more usable format
    if(this.isCardCollection(event)) {
      let cardsArray = [];

      Object.keys(event).forEach(function(set) {
        event[set].forEach(function(card) {
          cardsArray.push(card)
        })
      })

      this.cardsToDisplay = cardsArray;
    }
  }

}
