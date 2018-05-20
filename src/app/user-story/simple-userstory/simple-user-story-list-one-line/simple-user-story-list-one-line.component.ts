import { Component, OnInit, Input } from '@angular/core';
import { UserStory } from '../../../core/models/user-story.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {
  SingleDataDialogEditOrAddComponent
} from '../../../page-components/common-components/';
@Component({
  selector: 'app-simple-user-story-list-one-line',
  templateUrl: './simple-user-story-list-one-line.component.html',
  styleUrls: ['./simple-user-story-list-one-line.component.scss']
})
export class SimpleUserStoryListOneLineComponent implements OnInit {

  @Input() public userStories: UserStory[];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openEditPointsDialog(simpleUserStory: UserStory): void {
    const dialogRef = this.dialog.open(SingleDataDialogEditOrAddComponent, {
      width: '320px',
      data: {
        value: simpleUserStory.points,
        valueName: 'puntos de historia',
        type: 'number'}
    });

    dialogRef.afterClosed().subscribe(value => {
      simpleUserStory.points = value;
    });

}
}
