import { Component, OnInit, Input } from '@angular/core';
import { SimpleAssignmentOutput, UserStory, DeveloperUserStoriesAssigned } from '../../core/models';
import { SIMPLEUSERSTORIES } from '../../mocks/simple-mocks/simple-user-stories';
import { MatDialog } from '@angular/material';
import { DeveloperSelectDialogComponent } from '../../developer/developer-select-dialog/developer-select-dialog.component';
import { Developer } from '../../core/models';
@Component({
  selector: 'app-assignment-detail-read-only',
  templateUrl: './assignment-detail-read-only.component.html',
  styleUrls: ['./assignment-detail-read-only.component.scss']
})
export class AssignmentDetailReadOnlyComponent implements OnInit {
  simpleAssignment: SimpleAssignmentOutput;
  selectedUserStory: UserStory;
  developers: Developer[];
  userStories: UserStory[];
  constructor(
    public dialog: MatDialog,
  ) {
    this.simpleAssignment = JSON.parse('{"assignmentErrors":[],"simpleDeveloperUserStoriesAssigned":[{"developer":{"id":788273,"available_hours_per_week":45,"full_name":"Luis Gerardo Manrique Cardona"},"userStories":[{"id":2239865,"total_points":12,"subject":"Permitir el logueo en el sistema basado en los usuarios de el Campus Virtual, haciendo uso de sus nombres de usuario, contraseña y rol asignado en el Campus"},{"id":2252677,"total_points":12,"subject":"Permitir asignaciones basadas en un conjunto de historias resueltas"}]}]}')
    this.simpleAssignment.simpleDeveloperUserStoriesAssigned[0].userStories = SIMPLEUSERSTORIES;
    console.log(SIMPLEUSERSTORIES);
    this.simpleAssignment.simpleDeveloperUserStoriesAssigned.push(this.simpleAssignment.simpleDeveloperUserStoriesAssigned[0]);
    this.developers = new Array<Developer>();
    this.userStories = new Array<UserStory>();
  }
  openSelectDevelopers(developers: Developer[]): void {
    const dialogRef = this.dialog.open(DeveloperSelectDialogComponent, {
      width: '320px',
      data: {
        developers: developers,
        title: 'Seleccione el desarrollador'
      }
    });
    dialogRef.afterClosed().subscribe((selectedDeveloper: Developer) => {
      this.selectedUserStory.assignedUser = selectedDeveloper;
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
    )
  }

}
