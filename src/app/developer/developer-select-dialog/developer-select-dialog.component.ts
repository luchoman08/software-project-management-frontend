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
  dataOutput: {selectedDeveloper: Developer, oldDeveloper: Developer} = <{selectedDeveloper: Developer, oldDeveloper: Developer}>{};
  constructor(
    public dialogRef: MatDialogRef<DeveloperSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, developers: Developer[], oldDeveloper: Developer}) {
      this.developers = new Array<Developer>();
      console.log(this.dataOutput);
      this.dataOutput.oldDeveloper = data.oldDeveloper;
      this.developers = data.developers;
      if (this.developers.length > 0) {
        this.dataOutput.selectedDeveloper = this.developers[0];
        }
      this.title = data.title ? data.title : '';
    }
    ngOnInit() {

    }
}
