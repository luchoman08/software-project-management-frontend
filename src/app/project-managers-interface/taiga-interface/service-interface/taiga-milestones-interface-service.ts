import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sprint } from '../../../core/models';

import {
    taigaMilestonesToSprints,
    taigaMilestoneToSprint
 } from '../model-interface';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { TaigaMilestonesService } from '../../../project-managers/taiga/services/';
import { TaigaMilestone } from '../../../project-managers/taiga/models';

@Injectable()
export class TaigaMilestonesServiceInterface {
  constructor (
    private taigaMilestonesService: TaigaMilestonesService
  ) {}

  get(slug): Observable<Sprint> {
      let simpleDeveloper$: Observable<Sprint>;
      this.taigaMilestonesService.get(slug)
          .subscribe( (taigaMilestone: TaigaMilestone) => {
                    simpleDeveloper$ = Observable.of(taigaMilestoneToSprint(taigaMilestone));
            } );
    return simpleDeveloper$;
}

getProjectSprints(project_id): Observable<Sprint[]> {
    return this.taigaMilestonesService.getProjectMilestones(project_id)
    .map( (taigaMilestones: TaigaMilestone[]) => {
              return taigaMilestonesToSprints(taigaMilestones);
      } );
  }

}
