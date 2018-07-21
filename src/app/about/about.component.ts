import { Component, OnInit } from '@angular/core';

export interface Hobby {
  name: string;
  info: string;
  image: string;
  inverse: boolean;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  hobbies = Array<Hobby>();

  constructor() { }

  ngOnInit() {
    this.hobbies = [{
      name: 'Gaming',
      info: `Massive RPG fan`,
      image: '../../../../assets/img/gaming.png',
      inverse: false
    }, {
      name: 'Beer',
      info: `Craft beer drinker`,
      image: '../../../../assets/img/beer.png',
      inverse: true
    }, {
      name: 'Fitness',
      info: `Bit of a gym rat`,
      image: '../../../../assets/img/weightlifting.png',
      inverse: false
    }, {
      name: 'Music',
      info: `Metal head`,
      image: '../../../../assets/img/hand.png',
      inverse: true 
    }]
  }

}
