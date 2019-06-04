import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Project, Sprint, Developer, AssignmentByUniqueCost, UserStoryGroup, AssignmentByUserStoryGroups } from '../../core/models';
import { Errors } from '../../core/models';
import { ProjectsService, SprintsService, DevelopersService, LoadingBarService } from '../../core/services';
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
  projects: Project[];
  projectErrors: {};
  sprints: Sprint[];
  developers: Developer[];
  step = 0;
  assignmentOutput: AssignmentByUniqueCost;
  userStoryGroups: Array<UserStoryGroup>; // only for group assign
  errors: Errors = {errors: {}};
  formSelectProject: FormGroup;
  formSelectSprint: FormGroup;
  assignType: AssignmentType;
  assignTypeUniqueCost = AssignmentType.UNIQUE_COST;
  assignTypeByGroups = AssignmentType.HISTORTY_GROUPS;
  assignTypeByPunctuations = AssignmentType.BY_PUNCTUATIONS
  constructor(
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private projectService: ProjectsService,
    private sprintsService: SprintsService,
    private assignmentService: AssignmentService,
    private developerService: DevelopersService,
    private loader: LoadingBarService) {
      this.userStoryGroups = new Array<UserStoryGroup>();
      this.sprints = new Array<Sprint>();
      this.assignmentOutput = null;
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
    get selectedSprint(): Sprint {
      return this.formSelectSprint.get('sprint').value;
    }
    get selectedProject(): Project {
      return this.formSelectProject.get('project').value;
    }
    prevStep() {
      this.step--;
    }
  initSimpleSprints( project_id ) {
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
  initSimpleDevelopers(project_id) {
    this.loader.start();
    this.developerService.getProjectDevelopers(project_id)
    .subscribe((developers: Developer[]) => {
      this.developers = developers;
      this.loader.complete();
    })
  }
  getAssignmentByPunctuation(): void {
    const assignmentByPunctuation = new AssignmentByPunctuation();
    assignmentByPunctuation.assign_same_quantity_of_tasks = true;
    assignmentByPunctuation.developers = this.developers;
    assignmentByPunctuation.userStories = this.selectedSprint.user_stories;
    this.assignmentService.generateAssignmentByPunctuations(assignmentByPunctuation)
    .subscribe(
      (assignment: AssignmentByPunctuation) => {
        this.assignmentOutput = new AssignmentByUniqueCost();
        this.assignmentOutput.userStories = assignment.userStories;
        this.assignmentOutput.developers = assignment.developers;
      }
    );
  }
  getSimpleAssignment(): void {
    const assignment = new AssignmentByUniqueCost();
    assignment.relationHoursPoints = 1;
    assignment.startDate = new Date(this.selectedSprint.estimated_start);
    assignment.endDate = new Date(this.selectedSprint.estimated_finish);
    assignment.developers = this.developers;
    assignment.userStories = this.selectedSprint.user_stories;
    this.assignmentService.generateAssignmentByUniqueCost(assignment)
    .subscribe( (assignment: AssignmentByUniqueCost) => {
      window.scrollTo(0, 0);
      this.assignmentOutput = assignment;
    }
  );

  }
  getAssigmentByGroupedHistories() {
    console.log('executing assignment by grouped stories');
    const assignment = new AssignmentByUserStoryGroups();
    assignment.relationHoursPoints = 1;
    assignment.startDate = new Date(this.selectedSprint.estimated_start);
    assignment.endDate = new Date(this.selectedSprint.estimated_finish);
    assignment.developers = this.developers;
    assignment.userStories = this.selectedSprint.user_stories;
    console.log(this.selectedSprint, 'selected sprint');
    console.log(assignment, 'assignment');
    this.assignmentService.generateAssignmentByStoryGroups(assignment)
    .subscribe( (assignment: AssignmentByUserStoryGroups) => {
      window.scrollTo(0, 0);
      this.assignmentOutput = assignment;
    }
  );
  }
  getAssignment(): void {
    if ( this.assignType === AssignmentType.BY_PUNCTUATIONS ) {
      this.getAssignmentByPunctuation();
    } else if ( this.assignType === AssignmentType.UNIQUE_COST ) {
      this.getSimpleAssignment();
    } else if ( this.assignType === AssignmentType.HISTORTY_GROUPS ) {
      this.getAssigmentByGroupedHistories();
    }
  }

  ngOnInit() {
    this.loader.start();
    this.projectService.getByMemberId('303456')
    .subscribe (
      (projects: Project[]) => {
        this.projects = projects;
        this.loader.complete();
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


