import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { SimpleAssignmentOutput, UserStory, DeveloperUserStoriesAssigned } from '../../core/models';
import { SIMPLEUSERSTORIES } from '../../mocks/simple-mocks/simple-user-stories';
import { MatDialog } from '@angular/material';
import { DeveloperSelectDialogComponent } from '../../developer/developer-select-dialog/developer-select-dialog.component';
import { Developer } from '../../core/models';
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-assignment-detail-read-only',
  templateUrl: './assignment-detail-read-only.component.html',
  styleUrls: ['./assignment-detail-read-only.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssignmentDetailReadOnlyComponent implements OnInit {
  simpleAssignment: SimpleAssignmentOutput;
  selectedUserStory: UserStory;
  selectedDeveloper: Developer;
  mode ;
  value;
  developers: Developer[];
  userStories: UserStory[];
  constructor(
    public dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) {
    this.simpleAssignment = JSON.parse('{"assignmentErrors":[],"simpleDeveloperUserStoriesAssigned":[{"developer":{"id":788273,"available_hours_per_week":45,"full_name":"Luis Gerardo Manrique Cardona"},"userStories":[{"id":2239865,"total_points":12,"reference":1,"subject":"Permitir el logueo en el sistema basado en los usuarios de el Campus Virtual, haciendo uso de sus nombres de usuario, contraseña y rol asignado en el Campus"},{"id":2252677,"total_points":12,"reference":2,"subject":"Permitir asignaciones basadas en un conjunto de historias resueltas"}]},{"developer":{"id":8,"available_hours_per_week":45,"full_name":"Arnaldo ramirez"},"userStories":[{"id":5,"total_points":12,"reference":4,"subject":"Permitir reasignar historias de usuario"},{"id":18,"total_points":12,"reference":5,"subject":"Permitir reasignacion en tiempo  real"}]}]}');
    this.developers = new Array<Developer>();
    this.mode = 'determinate';
    this.value = 40;
    this.userStories = new Array<UserStory>();
  }
  totalUserStoryPoints(userStories: UserStory[]): number {
    let totalPoints: number = 0;
    for(let userStory of userStories) {
      totalPoints += userStory.total_points;
    }
    return totalPoints;
  }
  developerPercentageOcupation(developerAssignment: DeveloperUserStoriesAssigned) {
    console.log("una vez y otra mas hasta juntos terminar ");
    return  this.totalUserStoryPoints(developerAssignment.userStories) * 100 / developerAssignment.developer.available_hours_per_week;
  }
  openSelectDevelopers(userStory: UserStory, developers: Developer[]): void {
    this.selectedUserStory = userStory;
    const dialogRef = this.dialog.open(DeveloperSelectDialogComponent, {
      width: '320px',
      data: {
        developers: developers.filter((developer: Developer) => developer.id !== this.selectedDeveloper.id),
        title: 'Seleccione el desarrollador'
      }
    });
    dialogRef.afterClosed().subscribe((selectedDeveloper: Developer) => {
      console.log(this.selectedDeveloper);
      console.log(selectedDeveloper);
      console.log(this.selectedUserStory);
      let developersAssginmentToDisassign: DeveloperUserStoriesAssigned = this.simpleAssignment.simpleDeveloperUserStoriesAssigned.filter( 
        (assignment: DeveloperUserStoriesAssigned) =>  {
          return assignment.developer.id === this.selectedDeveloper.id;
        }
      )[0];
      console.log(developersAssginmentToDisassign);
      let developersAssginmentToAssign: DeveloperUserStoriesAssigned = this.simpleAssignment.simpleDeveloperUserStoriesAssigned.filter( 
        (assignment: DeveloperUserStoriesAssigned) =>  {
          return assignment.developer.id === selectedDeveloper.id;
        }
      )[0];
      let indexUserStoryChanged: number = developersAssginmentToDisassign.userStories.indexOf(this.selectedUserStory);
      developersAssginmentToAssign.userStories.push(this.selectedUserStory);
      developersAssginmentToDisassign.userStories.splice(indexUserStoryChanged, 1);
      this.selectedUserStory.assignedUser = selectedDeveloper;
      this.cd.markForCheck();
    });
  }
  changeSelectedUserStory(userStory: UserStory): void {
    this.selectedUserStory = userStory;
  }
  ngOnInit() {
      this.simpleAssignment.simpleDeveloperUserStoriesAssigned.map(
      (simpleDeveloperUserStoriesAssigned: DeveloperUserStoriesAssigned)  => {
      this.developers.push(simpleDeveloperUserStoriesAssigned.developer);
      this.userStories.concat(simpleDeveloperUserStoriesAssigned.userStories);
      }
    );
    
  }

}
