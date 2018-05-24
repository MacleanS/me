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

  cardsToDisplay: {};

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    console.log('change detected in container,', changes);

    // if(changes.cards && this.cards) {
    //   Object.keys(this.cards).forEach((set) => {
    //     if(this.cards[set].length) {
    //       this.cardsToDisplay[set] = this.cards[set]
    //     }
    //   })
    // }

    // console.log('c2d', this.cardsToDisplay)
  }
}
