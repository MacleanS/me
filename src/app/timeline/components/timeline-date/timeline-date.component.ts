import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-date',
  templateUrl: './timeline-date.component.html',
  styleUrls: ['./timeline-date.component.css']
})
export class TimelineDateComponent implements OnInit {

  @Input() date: string;

  constructor() { }

  ngOnInit() {
  }

}
