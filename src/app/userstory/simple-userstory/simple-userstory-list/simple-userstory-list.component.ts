import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {  UserStory, UserStoriesService } from '../../../core';

@Component({
  selector: 'app-simple-userstory-list',
  templateUrl: './simple-userstory-list.component.html',
  styleUrls: ['./simple-userstory-list.component.scss']
})
export class SimpleUserStoryListComponent implements OnInit {
  
  userStories: UserStory[];
  constructor(
    private userStoryService: UserStoriesService
    ) { }

  ngOnInit() {
    this.userStoryService.getProjectStories(267733).
    subscribe(userStories => {this.userStories = userStories; console.log(this.userStories);});
  }

}
