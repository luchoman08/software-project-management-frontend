import { Component, OnInit, Inject } from '@angular/core';
import { Developer } from '../../core/models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeveloperPair } from '../../core/models/developer-pair.model';

export interface DataOutput {
  selectedPair: DeveloperPair;
  oldPair: DeveloperPair;
}
interface DataInput {
   title: string;
   pairs: DeveloperPair[];
   oldPair: DeveloperPair
}
@Component({
  selector: 'app-developer-select-pair-dialog',
  templateUrl: './developer-select-pair-dialog.component.html',
  styleUrls: ['./developer-select-pair-dialog.component.scss']
})
export class DeveloperSelectPairDialogComponent implements OnInit {

  developerPairs: DeveloperPair[];
  title: string;
  dataOutput =  <DataOutput>{};
  constructor(
    public dialogRef: MatDialogRef<DeveloperSelectPairDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataInput) {
      this.dataOutput.oldPair = data.oldPair;
      this.developerPairs = data.pairs;
      if (this.developerPairs.length > 0) {
        this.dataOutput.selectedPair = this.developerPairs[0];
        }
      this.title = data.title ? data.title : '';
    }
    ngOnInit() {

    }

}
