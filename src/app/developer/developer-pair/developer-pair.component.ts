import { Component, OnInit } from '@angular/core';
import { DeveloperPair } from '../../core/models/developer-pair.model';
import { PAIRS } from '../../mocks/simple-mocks/pairs';

@Component({
  selector: 'app-developer-pair',
  templateUrl: './developer-pair.component.html',
  styleUrls: ['./developer-pair.component.scss']
})
export class DeveloperPairComponent implements OnInit {
  pair: DeveloperPair = PAIRS[0];
  constructor() { }

  ngOnInit() {
  }

}
