import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AssignmentByPairs } from '../../core/models/assignment-by-pairs.model';
import { DeveloperPair } from '../../core/models/developer-pair.model';
import { UserStory } from '../../core/models';
import { ASSIGNMENT_TO_PAIRS } from '../../mocks/simple-mocks/assignment-to-pairs.mock';
import { MatDialog } from '@angular/material';
import {
  DeveloperSelectPairDialogComponent,
  DataOutput
} from '../../developer/developer-select-pair-dialog/developer-select-pair-dialog.component';

@Component({
  selector: 'app-assignment-detail-pair',
  templateUrl: './assignment-detail-pair.component.html',
  styleUrls: ['./assignment-detail-pair.component.scss']
})
export class AssignmentDetailPairComponent implements OnInit {
  @Input() assignment: AssignmentByPairs;
  selectedPair: DeveloperPair;
  selectedUserStory: UserStory;
  constructor(
    public dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) { }
  openSelectPair(userStory: UserStory) {
    this.selectedUserStory = userStory;
    console.log(userStory, 'userStory, selected devel and pair in at open select pair')
    console.log(this.assignment.pairs, 'userStory, selected devel and pair in at open select pair')
    const dialogRef = this.dialog.open(DeveloperSelectPairDialogComponent, {
      width: '620px',
      data: {
        pairs: this.assignment.pairs.filter((pair: DeveloperPair) => {
          return !userStory.assignedTo( pair.developer1 ) &&
          !userStory.assignedTo( pair.developer2 )
        }),
        oldPair: this.selectedPair,
        title: 'Seleccione la pareja de desarrolladores'
      }
    });
    dialogRef.afterClosed().subscribe((dataOutput: DataOutput ) => {
      console.log( dataOutput.selectedPair.developerIds, 'developer ids for new assign');
      this.selectedUserStory.assigned_to = dataOutput.selectedPair.developerIds;
      this.cd.markForCheck();
    });
  }
  saveUserStories() {
    // TO DO
  }
  ngOnInit() {
    if (this.assignment === undefined) {
      this.assignment = AssignmentByPairs.makeFromJson(ASSIGNMENT_TO_PAIRS);
    }
  }

}

