import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-description',
  templateUrl: './timeline-description.component.html',
  styleUrls: ['./timeline-description.component.css']
})
export class TimelineDescriptionComponent implements OnInit {

  @Input() place: string;
  @Input() role: string;
  @Input() info: string;

  constructor() { }

  ngOnInit() {
  }

}
