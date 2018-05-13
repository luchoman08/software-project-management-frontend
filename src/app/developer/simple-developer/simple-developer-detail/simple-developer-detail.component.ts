import { Component, OnInit } from '@angular/core';
import { SimpleDeveloper } from '../../../core/models/simple-assignment/simple-developer';

import * as mocksSimpleDevels from '../../../mocks/simple-developers';
import { SIMPLEDEVELS } from '../../../mocks/simple-developers';

@Component({
  selector: 'app-simple-developer-detail',
  templateUrl: './simple-developer-detail.component.html',
  styleUrls: ['./simple-developer-detail.component.scss']
})
export class SimpleDeveloperDetailComponent implements OnInit {
  color = '#ff8d15';
  simpleDeveloper: SimpleDeveloper = SIMPLEDEVELS[0] ;
  constructor() { }

  ngOnInit() {
  }

}
