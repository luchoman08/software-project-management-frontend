import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { 
  UserStory,
  
  UserStoriesService, 
  Role, RolesService,
  Point, PointsService } 
from '../../../project-managers/taiga';

@Component({
  selector: 'app-simple-userstory-detail',
  templateUrl: './simple-userstory-detail.component.html',
  styleUrls: ['./simple-userstory-detail.component.scss']
})
export class SimpleUserStoryDetailComponent implements OnInit {
  
  @Input() public userStory: UserStory;
  constructor(
    private userStoryService: UserStoriesService,
    private rolesService: RolesService,
    private pointsService: PointsService
    ) { }

  ngOnInit() {
    /*  this.userStoryService.get('2239865')
      .subscribe(userstory => {this.userstory = userstory; console.log(this.userstory.points[1632608]);});
      */
  }
  /*
    Obtain the role name from TaigaApi  
  */
  getRoleName(id_role: number): Observable <Role> {
    return this.rolesService.get(id_role); 
  }
  
  //getRolePoints(id_punctuation): Obserbable <Role

}
