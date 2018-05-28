import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // viewMode: string;

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   console.log('window resize:::', event)
  //   if(event.target.innerWidth >= 900)
  //     this.viewMode = 'full-size';

  //   if(event.target.innerWidth <= 900 && event.target.innerWidth > 640)
  //     this.viewMode = 'reduced';

  //   if(event.target.innerWidth <= 640)
  //     this.viewMode = 'compact';
  // }

  @Input() card: any;
  @Input() set: string;
  
  constructor() { }

  ngOnInit() {
  }

}
