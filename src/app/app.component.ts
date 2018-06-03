import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuVisible: boolean = false;

  ngOnInit() {
    AOS.init();
  }

  toggleMenu = () => {
    this.menuVisible = !this.menuVisible
  }

  closeMenu = () => {
    this.menuVisible = false;
  }
}
