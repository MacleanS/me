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
  private cardsToDisplay: any;

  constructor() { }

  ngOnInit() {
    // this.getCard();
  }

  isCardCollection(object: any): object is cards {
    // really basic check to see if event is card collection...
    return 'Basic' in object;
  }

  cardsChanged(event) {
    if(this.isCardCollection(event)) {
      this.cardsToDisplay = event;
      console.log('Change event!!', this.cardsToDisplay);
    }
}

  // getCard() {
  //   this.hearthstoneService.getAllCards(3,3,3).subscribe(data => {
  //     this.cards = data;
  //     console.log('getCard() data',this.cards);
  //   })
  // }



  // getCardsByClass(className:string) {
  //   this.loading.cards = true;
  //   this.hearthstoneService.getByClass(className).subscribe( data => {
  //     this.loading.cards = false;
  //     this.cardsToDisplay = data;
  //     console.log(this.cardsToDisplay);
  //   })
  // }

}
