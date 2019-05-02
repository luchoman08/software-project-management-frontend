import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserStory } from '../../core/models';
import { UserStoriesService } from '../../core/services/user-stories.service';
import { SIMPLEUSERSTORIES } from '../../mocks/simple-mocks/simple-user-stories';
import { kdTree } from 'kd-tree-javascript' ;
@Component({
  selector: 'app-userstory-list',
  templateUrl: './userstory-list.component.html',
  styleUrls: ['./userstory-list.component.scss']
})
export class UserStoryListComponent implements OnInit {
  points = [
    {x: 1, y: 2},
    {x: 3, y: 4},
    {x: 5, y: 6},
    {x: 7, y: 8}
  ];


  userStories = <UserStory[]>SIMPLEUSERSTORIES;

  distance = function(a, b) {
    return Math.pow(a.x - b.x, 2) +  Math.pow(a.y - b.y, 2);
  }
  constructor(
    private userStoryService: UserStoriesService
    ) { }

  ngOnInit() {
   const tree = new kdTree(this.points, this.distance, ['x', 'y']);
   const nearest = tree.nearest({ x: 5, y: 5 }, 2);
  }

}
