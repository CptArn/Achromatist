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
