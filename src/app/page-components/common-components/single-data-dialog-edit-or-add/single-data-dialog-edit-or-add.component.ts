import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-single-data-dialog-edit-or-add',
  templateUrl: './single-data-dialog-edit-or-add.component.html',
  styleUrls: ['./single-data-dialog-edit-or-add.component.scss']
})
export class SingleDataDialogEditOrAddComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<SingleDataDialogEditOrAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }



  ngOnInit() {
  }

}


