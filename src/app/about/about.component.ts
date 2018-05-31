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
      info: `I've had a love of gaming since I was a child, and have always been drawn to the fantasy RPG genre, starting with Baldur's Gate,
      ranging up to Skyrim, Witcher 3, and Pillars of Eternity 2. Back in my uni days, I was a die-hard gamer, but now I only really have time
      for playing casually. I also play Hearthstone on and off...
      `,
      image: 'fas fa-gamepad fa-8x',
      inverse: false
    }, {
      name: 'Beer',
      info: `Who doesn't like a good beer? Probably quite a few people, but I'm not one of them! I'm a massive fan of craft beers, especially Beavertown beers. They make
      some serious American Pale Ales, Gamma Ray being my favourite.`,
      image: 'fas fa-beer fa-8x',
      inverse: true
    }, {
      name: 'Fitness',
      info: `I'm a self-proclaimed semi-fitness freak - only 'semi' because of the previous hobby. I go through phases of training for strength, speed, or endurance.
      Currently weightlifting is my main fitness interest, but before that, I was a keen mid-distance (5/10km) runner.`,
      image: 'fas fa-dumbbell fa-8x',
      inverse: false
    }, {
      name: 'Music',
      info: `I've been a metal-head most of my life, possibly due to the fact that as a kid, I had no control over the stereo. My favourite bands range from power metal legends
      "Helloween", to the strange man that is Devin Townsend. I've also played the guitar for about 15 years.`,
      image: 'fas fa-headphones fa-8x',
      inverse: true 
    }]
  }

}
