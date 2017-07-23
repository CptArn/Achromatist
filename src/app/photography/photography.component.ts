import { Component, OnInit } from '@angular/core';

import { slideInOutAnimation, slideToRight } from '../router.animations';


@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class PhotographyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('PHOTOGRAPHY');
    
  }



}
