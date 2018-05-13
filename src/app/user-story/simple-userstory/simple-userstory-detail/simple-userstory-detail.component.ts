import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {
  SingleDataDialogEditOrAddComponent
} from '../../../page-components/common-components/';
import { SimpleUserStory } from '../../../core/models/simple-assignment/simple-user-story';


@Component({
  selector: 'app-simple-userstory-detail',
  templateUrl: './simple-userstory-detail.component.html',
  styleUrls: ['./simple-userstory-detail.component.scss']
})
export class SimpleUserStoryDetailComponent implements OnInit {

  @Input() public simpleUserStory: SimpleUserStory;
  constructor(
    public dialog: MatDialog,
    ) { }

  ngOnInit() {

  }
  openEditPointsDialog(): void {
    const dialogRef = this.dialog.open(SingleDataDialogEditOrAddComponent, {
      width: '320px',
      data: {
        value: this.simpleUserStory.points,
        valueName: 'puntos de historia',
        type: "number"}
    });

    dialogRef.afterClosed().subscribe(value => {
      this.simpleUserStory.points = value;
    });
  }
  // getRolePoints(id_punctuation): Obserbable <Role

}
