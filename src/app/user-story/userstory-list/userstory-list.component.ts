import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserStory } from '../../core/models';
import { UserStoriesService } from '../../core/services/user-stories.service';

@Component({
  selector: 'app-userstory-list',
  templateUrl: './userstory-list.component.html',
  styleUrls: ['./userstory-list.component.scss']
})
export class UserStoryListComponent implements OnInit {

  userStories: UserStory[];
  constructor(
    private userStoryService: UserStoriesService
    ) { }

  ngOnInit() {
    this.userStoryService.getProjectUserStories(267733).
    subscribe(userStories => {
      this.userStories = userStories;
    });
  }

}
