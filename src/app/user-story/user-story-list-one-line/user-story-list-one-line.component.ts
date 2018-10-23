import { Component, OnInit, Input } from '@angular/core';
import { UserStory } from '../../core/models/user-story.model';
import { MatDialog } from '@angular/material';
import {
  SingleDataDialogEditOrAddComponent
} from '../../page-components/common-components';
//import { SIMPLEUSERSTORIES } from '../../mocks/simple-mocks/simple-user-stories';
@Component({
  selector: 'app-user-story-list-one-line',
  templateUrl: './user-story-list-one-line.component.html',
  styleUrls: ['./user-story-list-one-line.component.scss']
})

export class UserStoryListOneLineComponent implements OnInit {

  @Input() public userStories: UserStory[];
  @Input() public includePunctuations: boolean; //include global number of points or punctuations of story, are mutually exclusive
  constructor(
    public dialog: MatDialog
  ) { 
    this.includePunctuations = true;
  }

  ngOnInit() {
    console.log(this.includePunctuations);
  }
  openEditPointsDialog(userStory: UserStory): void {
    const dialogRef = this.dialog.open(SingleDataDialogEditOrAddComponent, {
      width: '320px',
      data: {
        value: userStory.total_points,
        valueName: 'puntos de historia',
        type: 'number'
      }
    });

    dialogRef.afterClosed().subscribe(value => {
      userStory.total_points = value;
    });

  }
}
