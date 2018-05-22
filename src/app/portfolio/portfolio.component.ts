import { Component, OnInit } from '@angular/core';
import { HearthstoneService } from '../services/hearthstone/hearthstone.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [HearthstoneService]
})
export class PortfolioComponent implements OnInit {

  private loading: boolean = false;
  private cardsToDisplay: any;

  constructor(private hearthstoneService: HearthstoneService) { }

  ngOnInit() {
  }

  getCardsByClass(className:string) {
    this.loading = true;
    this.hearthstoneService.getByClass(className).subscribe( data => {
      this.loading = false;
      this.cardsToDisplay = data;
      console.log(this.cardsToDisplay);
    })
  }

    
    

}
