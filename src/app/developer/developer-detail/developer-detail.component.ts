import { Component, OnInit } from '@angular/core';
import { Developer } from '../../core/models';
import { MatDialog } from '@angular/material';
import { SIMPLEDEVELS } from '../../mocks';
import { SingleDataDialogEditOrAddComponent } from '../../shared/components';
@Component({
  selector: 'app-developer-detail',
  templateUrl: './developer-detail.component.html',
  styleUrls: ['./developer-detail.component.scss']
})
export class DeveloperDetailComponent implements OnInit {
  color = '#ff8d15';
  developer: Developer = <Developer> SIMPLEDEVELS[0] ;
  constructor(
    public dialog: MatDialog,
  ) { }

  openEditAvailableHoursPerWeekDialog(): void {
    const dialogRef = this.dialog.open(SingleDataDialogEditOrAddComponent, {
      width: '320px',
      data: {
        value: this.developer.available_hours_per_week,
        valueName: 'horas disponibles a la semana',
        type: 'number'}
    });
    dialogRef.afterClosed().subscribe(value => {
      this.developer.available_hours_per_week = value;
    });
  }
  ngOnInit() {
  }

}
