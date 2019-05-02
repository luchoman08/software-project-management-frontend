import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AssignmentByPairs } from '../../core/models/assignment-by-pairs.model';
import { DeveloperPair } from '../../core/models/developer-pair.model';
import { UserStory, Developer } from '../../core/models';
import { ASSIGNMENT_TO_PAIRS } from '../../mocks/simple-mocks/assignment-to-pairs.mock';
import { MatDialog } from '@angular/material';
import { AssignedToPairPipe } from '../../core/pipes/assigned-to-pair.pipe';
import { UserStoriesService } from '../../core/services';
import { DeveloperSelectPairDialogComponent, dataOutput } from '../../developer/developer-select-pair-dialog/developer-select-pair-dialog.component';

@Component({
  selector: 'app-assignment-detail-pair',
  templateUrl: './assignment-detail-pair.component.html',
  styleUrls: ['./assignment-detail-pair.component.scss']
})
export class AssignmentDetailPairComponent implements OnInit {
  @Input() assignmentByPairs: AssignmentByPairs;
  selectedPair: DeveloperPair;
  selectedUserStory: UserStory;
  constructor(
    public dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) { }
  openSelectPair(userStory: UserStory) {
    this.selectedUserStory = userStory;
    console.log(userStory, 'userStory, selected devel and pair in at open select pair')
    console.log(this.assignmentByPairs.pairs, 'userStory, selected devel and pair in at open select pair')
    const dialogRef = this.dialog.open(DeveloperSelectPairDialogComponent, {
      width: '620px',
      data: {
        pairs: this.assignmentByPairs.pairs.filter((pair: DeveloperPair) => { 
          return !userStory.assignedTo( pair.developer1 ) &&
          !userStory.assignedTo( pair.developer2 ) 
        }),
        oldPair: this.selectedPair,
        title: 'Seleccione la pareja de desarrolladores'
      }
    });
    dialogRef.afterClosed().subscribe((dataOutput: dataOutput ) => {
      console.log( dataOutput.selectedPair.developerIds, 'developer ids for new assign'); 
      this.selectedUserStory.assigned_to = dataOutput.selectedPair.developerIds;
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    if (this.assignmentByPairs === undefined) {
      this.assignmentByPairs = AssignmentByPairs.makeFromJson(ASSIGNMENT_TO_PAIRS);
    }
  }

}

