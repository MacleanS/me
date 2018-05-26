import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HearthstoneService } from '../../../../../services/hearthstone/hearthstone.service';
import { NgForm } from '@angular/forms'
import { cards } from '../../interfaces/cardsCollection';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
  providers: [HearthstoneService]
})
export class InputFormComponent implements OnInit {

  loading = {
    allInfo: false,
    cards: false
  };

  private cardsToDisplay: any;
  private cardInfo: any;
  private validFormState: boolean = true;

  constructor(private hearthstoneService: HearthstoneService) { }

  ngOnInit() {
  }

  getCardInfo() {
    this.loading.allInfo = true;
    this.hearthstoneService.getAllCardInfo().subscribe(data => {
      this.cardInfo = data;
      this.loading.allInfo = false;
    })
  }

  valid(f: NgForm) {
    this.validFormState = f.valid;

    return f.valid;
  }

  submit(f: NgForm) {

    if(!this.valid(f)) 
      return;
    
    this.loading.cards = true;

    let params = new HttpParams();

    for (let key in f.value) {
      if(f.value[key])
        params = params.append(key, f.value[key]);
    }

    this.hearthstoneService.getFilteredCards(params).subscribe( data => {
      this.loading.cards = false;
      this.cardsToDisplay = data;
      this.change.emit(this.cardsToDisplay);
    })
  }

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();
}
