import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-percentage-progress-bar',
  templateUrl: './percentage-progress-bar.component.html',
  styleUrls: ['./percentage-progress-bar.component.scss']
})
export class PercentageProgressBarComponent implements OnInit {
  @Input() value: Number;
  @Input() warn_value: Number =  50; // 2 < warn_value < 99
  @Input() err_both_value: Number = 20// 1 < err_both_value < warn_value < 98

  constructor() {
    
   }

  
  ngOnInit() {
  }

}
