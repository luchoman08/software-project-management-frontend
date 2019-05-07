import { Developer } from './developer.model';
import { UserStory } from './user-story.model';

export class AssignmentByPunctuation  {
    developers: Developer[];
    userStories: UserStory[];
    assign_same_quantity_of_tasks: boolean;

    static  fromJSON(json: AssignmentByPunctuation): AssignmentByPunctuation {
        const assignment = new AssignmentByPunctuation();
        assignment.developers = Developer.fromJSONMultiple(json.developers);
        assignment.assign_same_quantity_of_tasks = json.assign_same_quantity_of_tasks;
        assignment.userStories = UserStory.fromJSONMultiple(json.userStories);
        return assignment;
    }
}
