import { Component, OnInit } from '@angular/core';
import { SimpleDeveloper } from '../../core/models';

@Component({
  selector: 'app-developer-detail',
  templateUrl: './developer-detail.component.html',
  styleUrls: ['./developer-detail.component.scss']
})
export class DeveloperDetailComponent implements OnInit {
  developer: SimpleDeveloper;
  constructor() { }

  ngOnInit() {
  }

}
