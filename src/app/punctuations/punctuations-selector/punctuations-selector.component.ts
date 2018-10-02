import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Punctuation } from '../../core/models/punctuation';
import { punctuations_mock } from '../../mocks/simple-mocks/punctuations';
import { MatSliderChange } from '@angular/material/slider';
@Component({
  selector: 'app-punctuations-selector',
  templateUrl: './punctuations-selector.component.html',
  styleUrls: ['./punctuations-selector.component.scss']
})
export class PunctuationsSelectorComponent implements OnInit {
  @Input() punctuations : Array<Punctuation> = punctuations_mock;
  @Output() change: EventEmitter<MatSliderChange>;
  max = 100;
  min = 0;
  step = 1;
  
  constructor() {

   }
   onSliderChange(change: MatSliderChange) {
    this.change.emit(change);
   }
  ngOnInit() {

  }

}
