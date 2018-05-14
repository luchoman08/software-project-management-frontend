import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { SimpleProject, SimpleSprint, SimpleDeveloper } from '../core/models';
import {
  SimpleProjectsService,
  SimpleDevelopersService,
  SimpleSprintsService } from '../project-managers/project-managers-interface/services';
@Component({
  selector: 'app-simple-assignment',
  templateUrl: './simple-assignment.component.html',
  styleUrls: ['./simple-assignment.component.scss']
})
export class SimpleAssignmentComponent implements OnInit {

  selectedSimpleProject: SimpleProject;
  selectedSimpleSprint: SimpleSprint;
  simpleProjects: SimpleProject[];
  formSelectProject: FormGroup;
  formSelectSprint: FormGroup;
  simpleSprints: SimpleSprint[];
  simpleDevelopers: SimpleDeveloper[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,
  private simpleProjectService: SimpleProjectsService,
  private simpleSprintService: SimpleSprintsService,
  private simpleDeveloperService: SimpleDevelopersService) { }

  initSimpleSprints(project_id) {
    this.simpleSprintService.getSimpleProjectSprints(project_id)
    .subscribe((simpleSprints: SimpleSprint[]) => {
      this.simpleSprints = simpleSprints;
    })
  }
  initSimpleDevelopers(project_id) {
    this.simpleDeveloperService.getSimpleProjectDevelopers(project_id)
    .subscribe((simpleDevelopers: SimpleDeveloper[]) => {
      this.simpleDevelopers = simpleDevelopers;
    })
  }
  ngOnInit() {
    this.simpleProjectService.getSimpleProjectsByMemberId('303456')
    .subscribe ((simpleProjects: SimpleProject[]) => {
      this.simpleProjects = simpleProjects;
    });
    this.formSelectProject = this._formBuilder.group({
      projectContrl: ['', Validators.required]
    });
    this.formSelectSprint = this._formBuilder.group({
      sprintCntrl: ['', Validators.required]
    });

  }
}

