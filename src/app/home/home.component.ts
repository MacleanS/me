import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu = () => {
    this.menuVisible = !this.menuVisible
  }

  closeMenu = () => {
    this.menuVisible = false;
  }
}
