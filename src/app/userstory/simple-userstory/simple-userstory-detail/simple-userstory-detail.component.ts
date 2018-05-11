import { Component, OnInit } from '@angular/core';
import { UserStory, UserStoryService } from '../../../core';

@Component({
  selector: 'app-simple-userstory-detail',
  templateUrl: './simple-userstory-detail.component.html',
  styleUrls: ['./simple-userstory-detail.component.scss']
})
export class SimpleUserStoryDetailComponent implements OnInit {
  
  public userstory: UserStory;
  constructor(
    private userStoryService: UserStoryService
    ) { }

  ngOnInit() {
      this.userStoryService.get('2239865')
      .subscribe(userstory => {this.userstory = userstory; console.log(this.userstory.points[1632608]);});
  }

}
