import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { ApiService } from './api.service';
import { AssignmentByUniqueCost } from '../models/assignment-by-unique-cost.model';
import { AssignmentByPunctuation } from '../models/assignment-by-punctuations.model';
import { AssignmentByPairs } from '../models/assignment-by-pairs.model';
import { DeveloperPair } from '../models/developer-pair.model';
import { Developer } from '../models/developer.model';

@Injectable()
export class AssignmentService {
  constructor(private apiService: ApiService) {}

  generateAssignmentByPunctuations(
    assignmentByPunctuations: AssignmentByPunctuation): Observable<AssignmentByPunctuation> {
      return this.apiService
      .post('/attributeassign/', assignmentByPunctuations)
      .pipe(map((_assignmentByPunctuations: AssignmentByPunctuation) => {
        return AssignmentByPunctuation.fromJSON(_assignmentByPunctuations);
      }));
    }

  generatePairs(
    pairsInput: {reverse: boolean, developers: Developer[]}
  ): Observable<DeveloperPair[]> {
    return this.apiService
    .post('/makepairs/', pairsInput)
    .pipe(map((pairs: DeveloperPair[]) => {
      return DeveloperPair.makeFromJsonArray(pairs);
    }));
  }

  generarAsignacionSimple(
    _assignmentByUniqueCost: AssignmentByUniqueCost
  ): Observable<AssignmentByUniqueCost> {
    return this.apiService
      .post('/uniquecostassign/', AssignmentByUniqueCost)
      .pipe(map((_assignmentByUniqueCost: AssignmentByUniqueCost) => {
        return AssignmentByUniqueCost.fromJSON(_assignmentByUniqueCost);
      }));
  }
  generateAssignmentByPairs(
    assignmentByPairs: AssignmentByPairs
  ): Observable<AssignmentByPairs> {
    return this.apiService
      .post('/pairassign/', assignmentByPairs)
      .pipe(map((_assignmentByPairs) => {
        return AssignmentByPairs.makeFromJson(_assignmentByPairs);
      }));
  }
}
