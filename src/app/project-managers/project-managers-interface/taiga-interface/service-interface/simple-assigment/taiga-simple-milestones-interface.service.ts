import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sprint } from '../../../../../core/models';

import {
    taigaMilestonesToSimpleSprints,
    taigaMilestoneToSimpleSprint
 } from '../../model-interface';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { TaigaMilestonesService } from '../../../../../project-managers/taiga/services/';
import { TaigaMilestone } from '../../../../../project-managers/taiga/models';

@Injectable()
export class TaigaMilestonesSimpleServiceInterface {
  constructor (
    private taigaMilestonesService: TaigaMilestonesService
  ) {}

  get(slug): Observable<Sprint> {
      let developer$: Observable<Sprint>;
      this.taigaMilestonesService.get(slug)
          .subscribe( (taigaMilestone: TaigaMilestone) => {
                    developer$ = Observable.of(taigaMilestoneToSimpleSprint(taigaMilestone));
            } );
    return developer$;
}

getSimpleProjectSprints(project_id): Observable<Sprint[]> {
    return this.taigaMilestonesService.getProjectMilestones(project_id)
    .map( (taigaMilestones: TaigaMilestone[]) => {
              return taigaMilestonesToSimpleSprints(taigaMilestones);
      } );
  }

}
