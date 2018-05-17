import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SimpleUserStory } from '../../../core/models/';
import { SimpleUserStoriesService } from '../../../project-managers/project-managers-interface/services/';

@Component({
  selector: 'app-simple-userstory-list',
  templateUrl: './simple-userstory-list.component.html',
  styleUrls: ['./simple-userstory-list.component.scss']
})
export class SimpleUserStoryListComponent implements OnInit {

  simpleUserStories: SimpleUserStory[];
  constructor(
    private userStoryService: SimpleUserStoriesService
    ) { }

  ngOnInit() {
    this.userStoryService.getSimpleProjectStories(267733).
    subscribe(simpleUserStories => {
      this.simpleUserStories = simpleUserStories;
    });
  }

}
