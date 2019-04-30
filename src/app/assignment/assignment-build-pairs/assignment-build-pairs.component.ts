import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Project, Sprint, Developer } from '../../core/models';
import { LoadingBarService } from '@ngx-loading-bar/core';

import { Errors } from '../../core/models';
import { ProjectsService, SprintsService, DevelopersService } from '../../core/services';
import { AssignmentService } from '../../core/services/assginment.service';
import { ActivatedRoute } from '@angular/router';
import { AssignmentByPairs } from '../../core/models/assignment-by-pairs.model';
import { DeveloperPair } from '../../core/models/developer-pair.model';

@Component({
  selector: 'app-assignment-build-pairs',
  templateUrl: './assignment-build-pairs.component.html',
  styleUrls: ['./assignment-build-pairs.component.scss']
})
export class AssignmentBuildPairsComponent implements OnInit {

  selectedSimpleProject: Project;
  selectedSimpleSprint: Sprint;
  simpleProjects: Project[];
  projectErrors: {};
  sprints: Sprint[];
  developers: Developer[];
  developerPairs: DeveloperPair[];
  step = 0;
  assignmentOutput: AssignmentByPairs ;
  errors: Errors = {errors: {}};
  formSelectProject: FormGroup;
  formSelectSprint: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  assignment_type_form: FormGroup;
  assignmentByPairs: AssignmentByPairs;

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
      this.assignmentByPairs = new AssignmentByPairs();
      this.formSelectProject = this._formBuilder.group({
        projectContrl: ['', Validators.required]
      });
      this.formSelectSprint = this._formBuilder.group({
        sprintCntrl: [{value: '', disabled: true}]
      });
      this.assignment_type_form = this._formBuilder.group({
        assign_type_cntrl: [{value: false, disabled: false}]
      });
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
    this.sprintsService.getProjectSprints(project_id, true)
    .subscribe((sprints: Sprint[]) => {
      this.sprints = sprints;
      if ( this.sprints.length === 0) {
        this.formSelectSprint.controls['sprintCntrl'].disable();
      } else {
        this.formSelectSprint.controls['sprintCntrl'].enable();
      }
      // this.formSelectSprint.controls['sprintCntrl'].enable();
      this.loadingBar.complete();
      this.nextStep();
    })
  }
  getPairs() {
    this.assignmentService.generatePairs({reverse: false, developers: this.developers})
    .subscribe(developerPairs => {
      this.developerPairs = developerPairs;
      console.log(typeof developerPairs, 'type of developer pairs from get pairs')
    }
    );
  }

  initSimpleDevelopers(project_id) {
    this.loadingBar.start();
    this.simpleDeveloperService.getProjectDevelopers(project_id)
    .subscribe((developers: Developer[]) => {
      this.developers = developers;
      this.loadingBar.complete();
    })
  }
  getAssignmentByPairs(): void {
    const assignmentByPairs = new AssignmentByPairs();
    assignmentByPairs.reverse = this.assignment_type_form.get('assign_type_cntrl').value;
    assignmentByPairs.developers = this.developers;
    assignmentByPairs.userStories = this.selectedSimpleSprint.user_stories;
    this.assignmentService.generateAssignmentByPairs(assignmentByPairs)
    .subscribe(
      (response: AssignmentByPairs) => {
        // console.log(JSON.stringify(response), 'response after assignment by punctuation');
        this.assignmentOutput = new AssignmentByPairs();
        this.assignmentOutput.userStories = response.userStories;
        this.assignmentOutput.developers = response.developers;
        this.assignmentOutput.pairs = response.pairs;
        this.assignmentOutput.reverse = response.reverse;
        console.log(JSON.stringify(this.assignmentOutput), 'assignment output');
      },
      (error: any) => {
        console.log(error, 'error at get assignment by punctutation')
      }
    );
  }

  getAssignment(): void {
      this.getAssignmentByPairs();
  }

  ngOnInit() {
    this.loadingBar.start();
    
    this.simpleProjectService.getByMemberId('303456')
    .subscribe (
      (simpleProjects: Project[]) => {
        console.log('simple projects', simpleProjects);
        this.simpleProjects = simpleProjects;
        this.loadingBar.complete();
      },
      errors => {
        console.log(errors, 'errors at build pairs get projects');
        this.projectErrors  = errors;
      }
    );
 }
}

