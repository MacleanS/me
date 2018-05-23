import { Component, OnInit } from '@angular/core';
import { HearthstoneService } from '../../../services/hearthstone/hearthstone.service';

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
  private card = {}
  private cardsToDisplay: any;

  constructor(private hearthstoneService: HearthstoneService) { }

  ngOnInit() {
    this.getCardInfo();
    this.getCard();
  }

  getCard() {
    this.hearthstoneService.getAllCards(3,3,3).subscribe(data => {
      this.card = data;
      console.log('getCard() data',this.card);
    })
  }

  getCardInfo() {
    this.loading.allInfo = true;
    this.hearthstoneService.getAllCardInfo().subscribe(data => {
      this.cardInfo = data;
      this.loading.allInfo = false;
    })
  }

  getCardsByClass(className:string) {
    this.loading.cards = true;
    this.hearthstoneService.getByClass(className).subscribe( data => {
      this.loading.cards = false;
      this.cardsToDisplay = data;
      console.log(this.cardsToDisplay);
    })
  }
}
