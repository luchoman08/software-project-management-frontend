import { Component, OnInit } from '@angular/core';
import { SimpleDeveloper } from '../../../core/models/';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SIMPLEDEVELS } from '../../../mocks/';
import { SingleDataDialogEditOrAddComponent } from '../../../page-components/common-components';
@Component({
  selector: 'app-simple-developer-detail',
  templateUrl: './simple-developer-detail.component.html',
  styleUrls: ['./simple-developer-detail.component.scss']
})
export class SimpleDeveloperDetailComponent implements OnInit {
  color = '#ff8d15';
  simpleDeveloper: SimpleDeveloper = SIMPLEDEVELS[0] ;
  constructor(
    public dialog: MatDialog,
  ) { }

  openEditAvailableHoursPerWeekDialog(): void {
    const dialogRef = this.dialog.open(SingleDataDialogEditOrAddComponent, {
      width: '320px',
      data: {
        value: this.simpleDeveloper.available_hours_per_week,
        valueName: 'horas disponibles a la semana',
        type: 'number'}
    });
    dialogRef.afterClosed().subscribe(value => {
      this.simpleDeveloper.available_hours_per_week = value;
    });
  }
  ngOnInit() {
  }

}
