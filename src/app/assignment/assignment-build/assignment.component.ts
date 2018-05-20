import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Project, Sprint, Developer, AssignmentInput, SimpleAssignmentOutput } from '../../core/models';
import { LoadingBarService } from '@ngx-loading-bar/core';

import {  } from '../../microservices/microservices-interface/story-assignment-interface/services';
import { Errors } from '../../core/models';
import { ProjectsService, SprintsService, DevelopersService } from '../../core/services';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  selectedSimpleProject: Project;
  selectedSimpleSprint: Sprint;
  simpleProjects: Project[];
  projectErrors: {};
  sprints: Sprint[];
  developers: Developer[];
  step = 0;
  errors: Errors = {errors: {}};
  formSelectProject: FormGroup;
  formSelectSprint: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  simpleAssignmentInput: AssignmentInput;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private _formBuilder: FormBuilder,
    private simpleProjectService: ProjectsService,
    private sprintsService: SprintsService,
    private simpleDeveloperService: DevelopersService,
    private loadingBar: LoadingBarService) {
      this.simpleAssignmentInput = new AssignmentInput();
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
    this.sprintsService.getProjectSprints(project_id)
    .subscribe((sprints: Sprint[]) => {
      this.sprints = sprints;
      // this.formSelectSprint.controls['sprintCntrl'].enable();
      this.loadingBar.complete();
      this.nextStep();
    })
  }
  initSimpleDevelopers(project_id) {
    this.loadingBar.start();
    this.simpleDeveloperService.getProjectDevelopers(project_id)
    .subscribe((developers: Developer[]) => {
      this.developers = developers;
      this.loadingBar.complete();
    })
  }
  getSimpleAssignment(): void {
    this.simpleAssignmentInput.hoursPointRelation = 1;
    this.simpleAssignmentInput.developers = this.developers;
    this.simpleAssignmentInput.userStories = this.selectedSimpleSprint.user_stories;
    console.log(JSON.stringify(this.simpleAssignmentInput));

  }

  ngOnInit() {
    this.loadingBar.start();
    this.simpleProjectService.getByMemberId('303456')
    .subscribe (
      (simpleProjects: Project[]) => {
        this.simpleProjects = simpleProjects;
        console.log(this.simpleProjects);
        this.loadingBar.complete();
      },
      errors => {
        this.projectErrors  = errors;
        console.log(this.projectErrors);
      }

    );
    this.formSelectProject = this._formBuilder.group({
      projectContrl: ['', Validators.required]
    });
    this.formSelectSprint = this._formBuilder.group({
      sprintCntrl: [{value: '', disabled: this.sprints}]
    });
  }
}

