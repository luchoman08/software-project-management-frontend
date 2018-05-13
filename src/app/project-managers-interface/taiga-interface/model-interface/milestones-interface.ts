import { TaigaMilestone } from '../../../project-managers/taiga/models';
import { Sprint } from '../../../core/models';

export function taigaMilestoneToSprint(
    taigaMilestone: TaigaMilestone): Sprint {
        const sprint: Sprint = new Sprint();
        sprint.id = taigaMilestone.id;
        sprint.name = taigaMilestone.name;
        sprint.estimated_start = taigaMilestone.estimated_start;
        sprint.estimated_finish = taigaMilestone.estimated_finish;
        return sprint;
    }

export function taigaMilestonesToSprints(
    taigaMilestones: TaigaMilestone[]): Sprint[] {
        return taigaMilestones.map(taigaMilestoneToSprint);
    }
