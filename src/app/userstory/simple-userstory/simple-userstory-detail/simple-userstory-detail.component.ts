import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SimpleStoryEditPointsComponent } from '../simple-story-edit-points/simple-story-edit-points.component';
import {
  UserStory,
  UserStoriesService,
  Role, RolesService,
  Point, PointsService } from '../../../project-managers/taiga';


@Component({
  selector: 'app-simple-userstory-detail',
  templateUrl: './simple-userstory-detail.component.html',
  styleUrls: ['./simple-userstory-detail.component.scss']
})
export class SimpleUserStoryDetailComponent implements OnInit {

  @Input() public userStory: UserStory;
  constructor(
    public dialog: MatDialog,
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
  openEditPointsDialog(): void {
    const dialogRef = this.dialog.open(SimpleStoryEditPointsComponent, {
      width: '320px',
      data: { points: this.userStory.points_unitary}
    });

    dialogRef.afterClosed().subscribe(points => {
      this.userStory.points_unitary = points;
    });
  }
  // getRolePoints(id_punctuation): Obserbable <Role

}
