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

  @Input() info: any;

  private loading = {
    allInfo: false,
    cards: false
  };

  private cardInfo = {}
  private cards = {}
  private cardsToDisplay: any = [];
  private error: any = {};

  constructor() { }

  ngOnInit() {
    // this.getCard();
  }

  // isCardCollection(object: any): object is cards {
  //   // really basic check to see if event is card collection...
  //   return 'Basic' in object || object[0];
  // }

  cardsChanged(event) {
    
    console.log(event);
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
