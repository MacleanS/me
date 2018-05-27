import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  showInfo: boolean = false;
  @Input() info: string;

  constructor() { }

  ngOnInit() {
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
}
