import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  @Input() name: string;
  @Input() info: string;
  @Input() image: string;
  @Input() inverse: boolean;

  constructor() { }

  ngOnInit() {
  }

}
