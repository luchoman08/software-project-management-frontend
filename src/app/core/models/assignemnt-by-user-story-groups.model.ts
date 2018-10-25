import { UserStoryGroup } from './usre-story-group.model';
import { UserStory } from './user-story.model';
import { Developer } from './developer.model';

export class AssignmentByUserStoryGroups {

    developers: Developer[];
    userStories: UserStory[];
    assign_same_quantity_of_tasks: boolean;
    startDate: Date;
    endDate: Date;
    relationHoursPoints: number;
    user_stories_group: UserStoryGroup[];
}
