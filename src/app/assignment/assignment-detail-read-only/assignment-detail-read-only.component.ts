import { Component, OnInit, ChangeDetectionStrategy,  Input, ChangeDetectorRef } from '@angular/core';

import { UserStory, AssignmentInput } from '../../core/models';
import { MatDialog } from '@angular/material';
import { DeveloperSelectDialogComponent } from '../../developer/developer-select-dialog/developer-select-dialog.component';
import { Developer } from '../../core/models';
import { developerPercentageOcupation } from '../../core/lib';
import { AssignedToPipe } from '../../core/pipes/assignedTo.pipe';
import { getBusinessDatesCount } from '../../core/lib/calendar.lib';
import { UserStoriesService } from '../../core/services/user-stories.service';

@Component({
  selector: 'app-assignment-detail-read-only',
  templateUrl: './assignment-detail-read-only.component.html',
  styleUrls: ['./assignment-detail-read-only.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssignmentDetailReadOnlyComponent implements OnInit {
  selectedUserStory: UserStory;
  selectedDeveloper: Developer;
  @Input() assignmentByPunctuation = false;
  daysOfWork: number;
  @Input() public assignment: AssignmentInput;
  constructor(
    public dialog: MatDialog,
    private asignedToPipe: AssignedToPipe,
    private userStoryService: UserStoriesService,
    private cd: ChangeDetectorRef
  ) {

  }

  initPercentageOcuped () {
    for ( const developer of this.assignment.developers) {
      developer.percentage_time_used =
      developerPercentageOcupation(
          developer,
          this.assignment.relationHoursPoints,
          this.asignedToPipe.transform(this.assignment.userStories, developer.id),
          this.daysOfWork);
    }
  }

  saveUserStories() {
      this.userStoryService.setMultiple(this.assignment.userStories).subscribe( );
  }
  openSelectDevelopers(userStory: UserStory): void {
    this.selectedUserStory = userStory;
    const dialogRef = this.dialog.open(DeveloperSelectDialogComponent, {
      width: '320px',
      data: {
        developers: this.assignment.developers.filter((developer: Developer) => developer.id !== this.selectedDeveloper.id),
        oldDeveloper: this.selectedDeveloper,
        title: 'Seleccione el desarrollador'
      }
    });
    dialogRef.afterClosed().subscribe((dataOutput: {selectedDeveloper: Developer, oldDeveloper: Developer} ) => {
      this.selectedUserStory.assigned_to = String(dataOutput.selectedDeveloper.id);
      this.initPercentageOcuped();
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    this.daysOfWork = getBusinessDatesCount(this.assignment.startDate, this.assignment.endDate);
    this.initPercentageOcuped();
  }

}
