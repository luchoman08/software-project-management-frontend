import { TaigaMilestone } from '../../../../../project-managers/taiga/models';
import { Sprint } from '../../../../../core/models';
import { taigaStoriesToSimpleUserStories } from './user-stories-simple-interface';

export function taigaMilestoneToSimpleSprint(
    taigaMilestone: TaigaMilestone): Sprint {
        const sprint: Sprint = new Sprint();
        sprint.id = taigaMilestone.id;
        sprint.name = taigaMilestone.name;
        sprint.user_stories = taigaStoriesToSimpleUserStories(taigaMilestone.user_stories);
        sprint.estimated_start = taigaMilestone.estimated_start;
        sprint.estimated_finish = taigaMilestone.estimated_finish;
        return sprint;
    }

export function taigaMilestonesToSimpleSprints(
    taigaMilestones: TaigaMilestone[]): Sprint[] {
        return taigaMilestones.map(taigaMilestoneToSimpleSprint);
    }
