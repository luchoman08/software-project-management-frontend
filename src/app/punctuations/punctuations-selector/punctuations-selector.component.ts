import { Component, OnInit } from '@angular/core';
import { Punctuation } from '../../core/models/punctuation';
import { punctuations_mock } from '../../mocks/simple-mocks/punctuations';

@Component({
  selector: 'app-punctuations-selector',
  templateUrl: './punctuations-selector.component.html',
  styleUrls: ['./punctuations-selector.component.scss']
})
export class PunctuationsSelectorComponent implements OnInit {
  punctuations : Array<Punctuation> = punctuations_mock;
  max = 100;
  min = 0;
  step = 1;
  
  constructor() {

   }

  ngOnInit() {
  }

}
