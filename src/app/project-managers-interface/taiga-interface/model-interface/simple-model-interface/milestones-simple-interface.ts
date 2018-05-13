import { TaigaMilestone } from '../../../../project-managers/taiga/models';
import { SimpleSprint } from '../../../../core/models';

export function taigaMilestoneToSimpleSprint(
    taigaMilestone: TaigaMilestone): SimpleSprint {
        const sprint: SimpleSprint = new SimpleSprint();
        sprint.id = taigaMilestone.id;
        sprint.name = taigaMilestone.name;
        sprint.estimated_start = taigaMilestone.estimated_start;
        sprint.estimated_finish = taigaMilestone.estimated_finish;
        return sprint;
    }

export function taigaMilestonesToSimpleSprints(
    taigaMilestones: TaigaMilestone[]): SimpleSprint[] {
        return taigaMilestones.map(taigaMilestoneToSimpleSprint);
    }
