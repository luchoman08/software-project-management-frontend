import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Developer } from '../../core/models' ;
@Component({
  selector: 'app-developer-select-dialog',
  templateUrl: './developer-select-dialog.component.html',
  styleUrls: ['./developer-select-dialog.component.scss']
})
export class DeveloperSelectDialogComponent implements OnInit {

  developers: Developer[];
  title: string;
  selectedDeveloper: Developer;

  constructor(
    public dialogRef: MatDialogRef<DeveloperSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.developers = new Array<Developer>();
      this.developers = data.developers;
      data.title? this.title = data.title: '';
      this.selectedDeveloper = new Developer;
    }
    ngOnInit() {
      if (this.developers.length > 0) {
      this.selectedDeveloper = this.developers[0];
      }
    }
}