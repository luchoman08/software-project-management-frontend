import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SimpleUserStory } from '../../../core/models/simple-assignment/simple-user-story';
import { UserStoriesService } from '../../../project-managers-interface/services';

@Component({
  selector: 'app-simple-userstory-list',
  templateUrl: './simple-userstory-list.component.html',
  styleUrls: ['./simple-userstory-list.component.scss']
})
export class SimpleUserStoryListComponent implements OnInit {

  simpleUserStories: SimpleUserStory[];
  constructor(
    private userStoryService: UserStoriesService
    ) { }

  ngOnInit() {
    this.userStoryService.getProjectStories(267733).
    subscribe(simpleUserStories => {this.simpleUserStories = simpleUserStories; console.log(this.simpleUserStories); });
  }

}
