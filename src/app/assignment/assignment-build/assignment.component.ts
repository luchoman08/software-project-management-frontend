import { Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Project, Sprint, Developer, AssignmentByUniqueCost } from '../../core/models';
import { LoadingBarService } from '@ngx-loading-bar/core';

import { Errors } from '../../core/models';
import { ProjectsService, SprintsService, DevelopersService } from '../../core/services';
import { AssignmentService } from '../../core/services/assginment.service';
import { AssignmentByPunctuation } from '../../core/models/assignment-by-punctuations.model';
import { ActivatedRoute } from '@angular/router';
import { AssignmentType } from '../../core/enums';



@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  simpleProjects: Project[];
  projectErrors: {};
  sprints: Sprint[];
  developers: Developer[];
  step = 0;
  assignmentOutput: AssignmentByUniqueCost ;
  errors: Errors = {errors: {}};
  formSelectProject: FormGroup;
  formSelectSprint: FormGroup;
  assignType: AssignmentType;
  simpleAssignmentByUniqueCost: AssignmentByUniqueCost;
  constructor(
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private simpleProjectService: ProjectsService,
    private sprintsService: SprintsService,
    private assignmentService: AssignmentService,
    private simpleDeveloperService: DevelopersService,
    private loadingBar: LoadingBarService) {
      this.sprints = new Array<Sprint>();
      this.assignmentOutput = null;
      this.simpleAssignmentByUniqueCost = new AssignmentByUniqueCost();
      this.formSelectProject = this._formBuilder.group({
        project: ['', Validators.required]
      });
      this.formSelectSprint = this._formBuilder.group({
        sprint: [{value: '', disabled: true}]
      });
    }

    setStep(index: number) {
      this.step = index;
    }

    nextStep() {
      this.step++;
    }
    get selectedSimpleSprint(): Sprint {
      return this.formSelectSprint.get('sprint').value;
    }
    get selectedSimpleProject(): Project {
      return this.formSelectProject.get('project').value;
    }
    prevStep() {
      this.step--;
    }
  initSimpleSprints(project_id) {
    this.loadingBar.start();
    this.sprintsService.getProjectSprints(project_id, true)
    .subscribe((sprints: Sprint[]) => {
      this.sprints = sprints;
      if ( this.sprints.length === 0) {
        this.formSelectSprint.controls['sprint'].disable();
      } else {
        this.formSelectSprint.controls['sprint'].enable();
      }
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
  getAssignmentByPunctuation(): void {
    const assignmentByPunctuation = new AssignmentByPunctuation();
    assignmentByPunctuation.assign_same_quantity_of_tasks = true;
    assignmentByPunctuation.developers = this.developers;
    assignmentByPunctuation.userStories = this.selectedSimpleSprint.user_stories;
    console.log(JSON.stringify(assignmentByPunctuation), 'assignment by punctuation string');
    this.assignmentService.generateAssignmentByPunctuations(assignmentByPunctuation)
    .subscribe(
      (assignment: AssignmentByPunctuation) => {
        // console.log(JSON.stringify(response), 'response after assignment by punctuation');
        this.assignmentOutput = new AssignmentByUniqueCost();
        this.assignmentOutput.userStories = assignment.userStories;
        this.assignmentOutput.developers = assignment.developers;
        console.log(JSON.stringify(this.assignmentOutput), 'assignment output');
      },
      (error: any) => {
        console.log(error, 'error at get assignment by punctutation')
      }
    );
  }
  getSimpleAssignment(): void {
    this.simpleAssignmentByUniqueCost.relationHoursPoints = 1;
    this.simpleAssignmentByUniqueCost.startDate = new Date(this.selectedSimpleSprint.estimated_start);
    this.simpleAssignmentByUniqueCost.endDate = new Date(this.selectedSimpleSprint.estimated_finish);
    this.simpleAssignmentByUniqueCost.developers = this.developers;
    this.simpleAssignmentByUniqueCost.userStories = this.selectedSimpleSprint.user_stories;
    this.assignmentService.generarAsignacionSimple(this.simpleAssignmentByUniqueCost)
    .subscribe( (assignment: AssignmentByUniqueCost) => {
      this.assignmentOutput = assignment;
    }
  );

  }
  getAssigmentByGroupedHistories() {
    // TO DO
  }
  getAssignment(): void {
    if ( this.assignType === AssignmentType.BY_PUNCTUATIONS ) {
      this.getAssignmentByPunctuation();
    } else if( this.assignType === AssignmentType.UNIQUE_COST ) {
      this.getSimpleAssignment();
    } else if ( this.assignType === AssignmentType.HISTORTY_GROUPS ) {
      this.getAssigmentByGroupedHistories();
    }
  }

  ngOnInit() {
    this.loadingBar.start();
    this.simpleProjectService.getByMemberId('303456')
    .subscribe (
      (simpleProjects: Project[]) => {
        this.simpleProjects = simpleProjects;
        this.loadingBar.complete();
      },
      errors => {
        this.projectErrors  = errors;
      }
    );
    this.route.params.subscribe(params => {
      const assignmentType: AssignmentType = Number(params['assign_type']);
      this.assignType = assignmentType;

   });
 }
}

