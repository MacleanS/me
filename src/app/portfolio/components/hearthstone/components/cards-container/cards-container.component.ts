import { Component, OnInit, Input } from '@angular/core';
import { KeysPipe } from '../../../../../keys.pipe'
import { cards } from '../../interfaces/cardsCollection';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  @Input() cards: any;
  
  cardLimit: number = 5;
  cardsToDisplay: {};

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    this.cardLimit = 5;
    // changes.prop contains the old and the new value...
  }

  increaseLimit() {
    this.cardLimit += 5;
  }
}
