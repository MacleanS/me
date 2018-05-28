import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-300px)'}),
          animate('300ms ease-out', style({transform: 'translateY(0)'}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)'}),
          animate('300ms ease-in', style({transform: 'translateY(-300px)'}))
        ])
      ]
    ),
    trigger('fadeAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('300ms ease-in', style({opacity: 0}))
      ])
    ])
  ],
})
export class InfoComponent implements OnInit {

  showInfo: boolean = false;
  @Input() info: string;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];

  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
    const body = document.getElementsByTagName('body')[0];

    this.showInfo ? body.classList.add('modal-open') : body.classList.remove('modal-open');
  }
}
