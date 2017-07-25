import { Component, OnInit } from '@angular/core';

import { slideInOutAnimation, fade } from '../router.animations';


@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css'],
  animations: [fade],
  host: { '[@fade]': '' }
})
export class PhotographyComponent implements OnInit {
  public my_Class = '';
  public images: any = [
      {id: 1, category: "35mm", type: "b&w", url: "assets/gallery/1.jpg"},
      {id: 2, category: "35mm", type: "b&w", url: "assets/gallery/2.jpg"},
      {id: 3, category: "35mm", type: "b&w", url: "assets/gallery/3.jpg"},
      {id: 4, category: "35mm", type: "b&w", url: "assets/gallery/4.jpg"},
      {id: 5, category: "35mm", type: "b&w", url: "assets/gallery/5.jpg"},
      {id: 6, category: "35mm", type: "b&w", url: "assets/gallery/6.jpg"},
      {id: 7, category: "35mm", type: "b&w", url: "assets/gallery/7.jpg"},
      {id: 8, category: "35mm", type: "b&w", url: "assets/gallery/8.jpg"},
      {id: 9, category: "35mm", type: "b&w", url: "assets/gallery/9.jpg"},
  ];


  constructor() { }




  ngOnInit() {


  }

  ngAfterContentChecked() {
    let that = this;

     setTimeout(function() {
        that.my_Class = 'checked';
    }, 100);
  }


}
