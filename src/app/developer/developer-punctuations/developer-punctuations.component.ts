import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../../core/models';
import { MatDialog } from '@angular/material';
import { SingleDataDialogEditOrAddComponent } from '../../page-components/common-components';
import { Punctuation } from '../../core/models/punctuation';

@Component({
  selector: 'app-developer-punctuations',
  templateUrl: './developer-punctuations.component.html',
  styleUrls: ['./developer-punctuations.component.scss']
})
export class DeveloperPunctuationsComponent implements OnInit {
  @Input() developer: Developer;

  constructor(
    public dialog: MatDialog
  ) { }
  openEditPunctuationDialog(punctuation: Punctuation): void {
    const dialogRef = this.dialog.open(SingleDataDialogEditOrAddComponent, {
      width: '320px',
      data: {
        value: punctuation.value,
        valueName: `puntuacion en atributo '${punctuation.name}'`,
        type: 'number'
      }
    });

    dialogRef.afterClosed().subscribe(value => {
      punctuation.value = value;
    });

  }
  ngOnInit() {
  }

}
