import { Component, OnInit, Input } from '@angular/core';
import { SimpleAssignmentOutput } from '../../core/models';

@Component({
  selector: 'app-assignment-detail-read-only',
  templateUrl: './assignment-detail-read-only.component.html',
  styleUrls: ['./assignment-detail-read-only.component.scss']
})
export class AssignmentDetailReadOnlyComponent implements OnInit {
  simpleAssignment: SimpleAssignmentOutput;
  constructor() {
    this.simpleAssignment = JSON.parse('{"assignmentErrors":[],"simpleDeveloperUserStoriesAssigned":[{"developer":{"id":788273,"available_hours_per_week":45,"full_name":"Luis Gerardo Manrique Cardona"},"userStories":[{"id":2239865,"total_points":12,"subject":"Permitir el logueo en el sistema basado en los usuarios de el Campus Virtual, haciendo uso de sus nombres de usuario, contraseña y rol asignado en el Campus"},{"id":2252677,"total_points":12,"subject":"Permitir asignaciones basadas en un conjunto de historias resueltas"}]}]}')
    this.simpleAssignment.simpleDeveloperUserStoriesAssigned.push(this.simpleAssignment.simpleDeveloperUserStoriesAssigned[0]);
  }

  ngOnInit() {
  }

}
