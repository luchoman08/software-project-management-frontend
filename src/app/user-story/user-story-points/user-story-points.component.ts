import { Component, OnInit, Input } from '@angular/core';
import { UserStory } from '../../core/models';
import { Punctuation } from '../../core/models/punctuation';

@Component({
  selector: 'app-user-story-points',
  templateUrl: './user-story-points.component.html',
  styleUrls: ['./user-story-points.component.scss']
})
export class UserStoryPointsComponent implements OnInit {
  @Input() userStory: UserStory;
  constructor() {
   }
   consolelog(punctuation: Punctuation) {
     console.log(punctuation.name);
   }
  
  ngOnInit() {
    console.log(this.userStory, 'hola ')
  }

}
