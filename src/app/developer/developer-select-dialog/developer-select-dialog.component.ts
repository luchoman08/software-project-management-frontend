import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-developer-select-dialog',
  templateUrl: './developer-select-dialog.component.html',
  styleUrls: ['./developer-select-dialog.component.scss']
})
export class DeveloperSelectDialogComponent implements OnInit {

  animal: string;
  name: string;

  constructor(
    public dialogRef: MatDialogRef<DeveloperSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


}