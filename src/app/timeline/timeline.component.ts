import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   timeline = [
    {
      date: 'October 2017 - present',
      description: {
        place: 'Kobas',
        role: 'Analyst',
        info: 'Software Engineer' 
      }
    }, {
      date: 'December 2011 - September 2017',
      description: {
        place: 'Aimia',
        role: 'Analyst',
        info: 'Campaign analyst' 
      }
    }, {
      date: 'September 2011 - December 2011',
      description: {
        place: 'Planning Inc',
        role: 'Programmer Analyst',
        info: 'UCL Physics masters'
      }
    }, {
      date: 'September 2007 - June 2011',
      description: {
        place: 'University of London',
        role: 'Student',
        info: 'UCL Physics masters'
      }
    }
  ]
}
