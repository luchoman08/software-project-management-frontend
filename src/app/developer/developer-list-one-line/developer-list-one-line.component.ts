import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../../core/models';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {
  SingleDataDialogEditOrAddComponent 
} from '../../page-components/common-components/single-data-dialog-edit-or-add/single-data-dialog-edit-or-add.component';
import { CapitalizePipe } from '../../core/pipes/capitalize.pipe';

@Component({
  selector: 'app-developer-list-one-line',
  templateUrl: './developer-list-one-line.component.html',
  styleUrls: ['./developer-list-one-line.component.scss']

})
export class SimpleDeveloperListOneLineComponent implements OnInit {
  @Input() developers: Developer[];
  @Input() developer_punctuations: boolean = false;
  constructor(
    public dialog: MatDialog,
  ) { }
  ngOnInit() {
  }
  openEditAvailableHoursPerWeekDialog(developer: Developer): void {
    const dialogRef = this.dialog.open(SingleDataDialogEditOrAddComponent, {
      width: '320px',
      data: {
        value: developer.available_hours_per_week,
        valueName: 'horas disponibles a la semana',
        type: 'number'}
    });
    dialogRef.afterClosed().subscribe(value => {
      developer.available_hours_per_week = value;
    });
  }


}
