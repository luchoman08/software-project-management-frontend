import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-simple-story-edit-points',
  templateUrl: './simple-story-edit-points.component.html',
  styleUrls: ['./simple-story-edit-points.component.scss']
})
export class SimpleStoryEditPointsComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<SimpleStoryEditPointsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
