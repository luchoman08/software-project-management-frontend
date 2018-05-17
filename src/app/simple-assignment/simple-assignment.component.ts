import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { SimpleProject, SimpleSprint, SimpleDeveloper, SimpleAssignmentInput, SimpleAssignmentOutput } from '../core/models';
import { LoadingBarService } from '@ngx-loading-bar/core';

import { SimpleAssignmentService } from '../microservices/microservices-interface/story-assignment-interface/services';
import { Errors } from '../core/models';
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
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  selectedSimpleProject: SimpleProject;
  selectedSimpleSprint: SimpleSprint;
  simpleProjects: SimpleProject[];
  simpleSprints: SimpleSprint[];
  simpleDevelopers: SimpleDeveloper[];
  step = 0;
  errors: Errors = {errors: {}};
  formSelectProject: FormGroup;
  formSelectSprint: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  simpleAssignmentInput: SimpleAssignmentInput;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private _formBuilder: FormBuilder,
    private simpleProjectService: SimpleProjectsService,
    private simpleSprintService: SimpleSprintsService,
    private simpleDeveloperService: SimpleDevelopersService,
    private simpleAssignmentService: SimpleAssignmentService,
    private loadingBar: LoadingBarService) {
      this.simpleAssignmentInput = new SimpleAssignmentInput();
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

    setStep(index: number) {
      this.step = index;
    }

    nextStep() {
      this.step++;
    }

    prevStep() {
      this.step--;
    }
  initSimpleSprints(project_id) {
    this.loadingBar.start();
    this.simpleSprintService.getSimpleProjectSprints(project_id)
    .subscribe((simpleSprints: SimpleSprint[]) => {
      this.simpleSprints = simpleSprints;
      // this.formSelectSprint.controls['sprintCntrl'].enable();
      this.loadingBar.complete();
      this.nextStep();
    })
  }
  initSimpleDevelopers(project_id) {
    this.loadingBar.start();
    this.simpleDeveloperService.getSimpleProjectDevelopers(project_id)
    .subscribe((simpleDevelopers: SimpleDeveloper[]) => {
      this.simpleDevelopers = simpleDevelopers;
      this.loadingBar.complete();
    })
  }
  getSimpleAssignment(): void {
    this.simpleAssignmentInput.hoursPointRelation = 1;
    this.simpleAssignmentInput.simpleDevelopers = this.simpleDevelopers;
    this.simpleAssignmentInput.simpleUserStories = this.selectedSimpleSprint.user_stories;
    console.log(JSON.stringify(this.simpleAssignmentInput));
    this.simpleAssignmentService.generateSimpleAssignment(this.simpleAssignmentInput)
    .subscribe(
      (simpleAssignmentOutput: SimpleAssignmentOutput) => {
        console.log(JSON.stringify(simpleAssignmentOutput)); 
      },
      err => {
        this.errors = err;
        console.log(this.errors);
      }
    );
  }

  ngOnInit() {
    this.loadingBar.start();
    this.simpleProjectService.getSimpleProjectsByMemberId('303456')
    .subscribe ((simpleProjects: SimpleProject[]) => {
      this.simpleProjects = simpleProjects;
      this.loadingBar.complete();
    });
    this.formSelectProject = this._formBuilder.group({
      projectContrl: ['', Validators.required]
    });
    this.formSelectSprint = this._formBuilder.group({
      sprintCntrl: [{value: '', disabled: this.simpleSprints}]
    });
  }
}

