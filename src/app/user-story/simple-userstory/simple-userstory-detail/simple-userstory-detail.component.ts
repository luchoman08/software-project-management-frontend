import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SimpleStoryEditPointsComponent } from '../simple-story-edit-points/simple-story-edit-points.component';
import { SimpleUserStory } from '../../../core/models/simple-assignment/simple-user-story';
import { UserStoriesService } from '../../../project-managers-interface/services';


@Component({
  selector: 'app-simple-userstory-detail',
  templateUrl: './simple-userstory-detail.component.html',
  styleUrls: ['./simple-userstory-detail.component.scss']
})
export class SimpleUserStoryDetailComponent implements OnInit {

  @Input() public simpleUserStory: SimpleUserStory;
  constructor(
    public dialog: MatDialog,
    private userStoryService: UserStoriesService,
    ) { }

  ngOnInit() {
    /*  this.userStoryService.get('2239865')
      .subscribe(userstory => {this.userstory = userstory; console.log(this.userstory.points[1632608]);});
      */
  }
  openEditPointsDialog(): void {
    const dialogRef = this.dialog.open(SimpleStoryEditPointsComponent, {
      width: '320px',
      data: { points: this.simpleUserStory.points}
    });

    dialogRef.afterClosed().subscribe(points => {
      this.simpleUserStory.points = points;
    });
  }
  // getRolePoints(id_punctuation): Obserbable <Role

}
