import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('logoOnHover', [


      state('logoHover', style({
        height: '200px',
        width: '200px',
        opacity: 1
      })),
      state('logoNotHovered', style({
        height: '100px',
        width: '100px',
        opacity: 1
      })),
  
      transition('logoNotHovered => logoHover', [
        animate('.5s')
      ]),
      transition('logoHover => logoNotHovered', [
        animate('.5s')
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  logoHover = false;

  constructor() {



   }

  ngOnInit(): void {

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleLogoHover() {
    this.logoHover = !this.logoHover;
    console.log(this.logoHover);
  }



}
