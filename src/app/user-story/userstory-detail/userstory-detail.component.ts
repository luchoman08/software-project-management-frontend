import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {
  SingleDataDialogEditOrAddComponent
} from '../../page-components/common-components';
import { UserStory } from '../../core/models';


@Component({
  selector: 'app-userstory-detail',
  templateUrl: './userstory-detail.component.html',
  styleUrls: ['./userstory-detail.component.scss']
})
export class UserStoryDetailComponent implements OnInit {

  @Input() public userStory: UserStory;
  constructor(
    public dialog: MatDialog,
    ) { }

  ngOnInit() {

  }
  openEditPointsDialog(): void {
    const dialogRef = this.dialog.open(SingleDataDialogEditOrAddComponent, {
      width: '320px',
      data: {
        value: this.userStory.total_points,
        valueName: 'puntos de historia',
        type: 'number'}
    });

    dialogRef.afterClosed().subscribe(value => {
      this.userStory.total_points = value;
    });
  }
  

}
