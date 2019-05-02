import { Component, OnInit, Input } from '@angular/core';
import { AssignmentByPairs } from '../../core/models/assignment-by-pairs.model';
import { DeveloperPair } from '../../core/models/developer-pair.model';
import { UserStory } from '../../core/models';

@Component({
  selector: 'app-assignment-detail-pair',
  templateUrl: './assignment-detail-pair.component.html',
  styleUrls: ['./assignment-detail-pair.component.scss']
})
export class AssignmentDetailPairComponent implements OnInit {
  @Input() assignmentByPairs: AssignmentByPairs;
  selectedPair: DeveloperPair;
  selectedUserStory: UserStory;
  constructor() { }

  ngOnInit() {
  }

}
