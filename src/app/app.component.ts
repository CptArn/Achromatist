import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navHide: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    console.log('scrolled');
   }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    console.log(number);
    if (number < 500) {
      this.navHide = true;
      console.log('ey');
    } else if (this.navHide && number > 500) {
      this.navHide = false;
    }
  }

}
