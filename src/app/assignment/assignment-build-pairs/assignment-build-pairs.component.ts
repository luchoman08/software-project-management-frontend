import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Project, Sprint, Developer } from '../../core/models';

import { Errors } from '../../core/models';
import { ProjectsService, SprintsService, DevelopersService, LoadingBarService } from '../../core/services';
import { AssignmentService } from '../../core/services/assginment.service';
import { AssignmentByPairs } from '../../core/models/assignment-by-pairs.model';
import { DeveloperPair } from '../../core/models/developer-pair.model';

@Component({
  selector: 'app-assignment-build-pairs',
  templateUrl: './assignment-build-pairs.component.html',
  styleUrls: ['./assignment-build-pairs.component.scss']
})
export class AssignmentBuildPairsComponent implements OnInit {

  projects: Project[];
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
    private _formBuilder: FormBuilder,
    private projectsService: ProjectsService,
    private sprintsService: SprintsService,
    private assignmentService: AssignmentService,
    private developerService: DevelopersService,
    private loader: LoadingBarService) {
      this.sprints = new Array<Sprint>();
      this.assignmentOutput = null;
      this.assignmentByPairs = new AssignmentByPairs();
      this.formSelectProject = this._formBuilder.group({
        project: ['', Validators.required]
      });
      this.formSelectSprint = this._formBuilder.group({
        sprint: [{value: '', disabled: true}]
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
  initSprints(project_id) {
    this.loader.start();
    this.sprintsService.getProjectSprints(project_id, true)
    .subscribe((sprints: Sprint[]) => {
      this.sprints = sprints;
      if ( this.sprints.length === 0) {
        this.formSelectSprint.controls['sprint'].disable();
      } else {
        this.formSelectSprint.controls['sprint'].enable();
      }
      this.loader.complete();
      this.nextStep();
    })
  }
  get project(): Project {
    return this.formSelectProject.get('project').value;
  }
  get sprint(): Sprint {
    return this.formSelectSprint.get('sprint').value;
  }
  getPairs() {
    this.assignmentService.generatePairs({reverse: false, developers: this.developers})
    .subscribe(developerPairs => {
      this.developerPairs = developerPairs;
      console.log(developerPairs, 'developer pairs from get pairs')
    }
    );
  }

  initDevelopers(project_id) {
    this.loader.start();
    this.developerService.getProjectDevelopers(project_id)
    .subscribe((developers: Developer[]) => {
      this.developers = developers;
      this.loader.complete();
    })
  }
  getAssignmentByPairs(): void {
    const assignmentByPairs = new AssignmentByPairs();
    assignmentByPairs.reverse = this.assignment_type_form.get('assign_type_cntrl').value;
    assignmentByPairs.developers = this.developers;
    assignmentByPairs.userStories = this.sprint.user_stories;
    this.assignmentService.generateAssignmentByPairs(assignmentByPairs)
    .subscribe(
      (assignment: AssignmentByPairs) => {
        window.scrollTo(0, 0);
        this.assignmentOutput = assignment;
      }
    );
  }

  getAssignment(): void {
      this.getAssignmentByPairs();
  }

  ngOnInit() {
    this.loader.start();

    this.projectsService.getByMemberId('303456')
    .subscribe (
      (projects: Project[]) => {
        console.log('projects', projects);
        this.projects = projects;
        this.loader.complete();
      },
      errors => {
        console.log(errors, 'errors at build pairs get projects');
        this.projectErrors  = errors;
      }
    );
 }
}

