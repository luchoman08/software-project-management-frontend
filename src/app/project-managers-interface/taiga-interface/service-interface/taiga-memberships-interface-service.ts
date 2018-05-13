import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SimpleDeveloper } from '../../../core/models';

import {
    taigaMembershipToSimpleDeveloper,
    taigaMembershipsToSimpleDevelopers
 } from '../model-interface';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { TaigaMembershipsService } from '../../../project-managers/taiga/services/';
import { TaigaUserStory } from '../../../project-managers/taiga/models/taiga-user-story.model';
import { TaigaMembership } from '../../../project-managers/taiga/models/taiga-membership.model';

@Injectable()
export class TaigaMembershipsServiceInterface {
  constructor (
    private taigaMembershipsService: TaigaMembershipsService
  ) {}

  get(slug): Observable<SimpleDeveloper> {
      let simpleDeveloper$: Observable<SimpleDeveloper>;
      this.taigaMembershipsService.get(slug)
          .subscribe( (taigaMembership: TaigaMembership) => {
                    console.log(taigaMembership);
                    simpleDeveloper$ = Observable.of(taigaMembershipToSimpleDeveloper(taigaMembership));
            } );
    return simpleDeveloper$;
}

  getProjectMemberships(project_id): Observable<SimpleDeveloper[]> {
    return this.taigaMembershipsService.getProjectMembership(project_id)
    .map( (taigaMemberships: TaigaMembership[]) => {
              console.log(taigaMemberships);
              return taigaMembershipsToSimpleDevelopers(taigaMemberships);
      } );
  }

}
