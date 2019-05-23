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
    static fromJSON(json: AssignmentByUserStoryGroups): AssignmentByUserStoryGroups {
        const assignment = new AssignmentByUserStoryGroups();
        assignment.developers = Developer.fromJSONMultiple(json.developers);
        assignment.userStories = UserStory.fromJSONMultiple(json.userStories);
        assignment.assign_same_quantity_of_tasks = json.assign_same_quantity_of_tasks;
        assignment.startDate = new Date(json.startDate);
        assignment.endDate = new Date(json.endDate);
        assignment.relationHoursPoints = json.relationHoursPoints;
        assignment.user_stories_group = json.user_stories_group;
        return assignment;
    }
}
