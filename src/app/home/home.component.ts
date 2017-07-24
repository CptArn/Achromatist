import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { slideInOutAnimation, fade, slideToTop } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fade],
  host: { '[@fade]': '' }
})
export class HomeComponent implements OnInit {
  images: string[];
  navHide: boolean = true;


  constructor(@Inject(DOCUMENT) private document: Document) { 
   this.images = ["../assets/logo.png", "../assets/BG.png"];

  }

  ngOnInit() {
    
  }


 /* @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    console.log(number);
    if (number < 500) {
      this.navHide = true;
    } else if (this.navHide && number > 500) {
      this.navHide = false;
    }
  } */


}
