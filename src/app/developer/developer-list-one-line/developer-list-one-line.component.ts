import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Developer } from '../../core/models';
import {
  SingleDataDialogEditOrAddComponent
} from '../../shared/components';

@Component({
  selector: 'app-developer-list-one-line',
  templateUrl: './developer-list-one-line.component.html',
  styleUrls: ['./developer-list-one-line.component.scss']

})
export class SimpleDeveloperListOneLineComponent implements OnInit {
  @Input() developers: Developer[];
  @Input() developer_punctuations = false;
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
