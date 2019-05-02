import { Developer } from './developer.model';
import { UserStory } from './user-story.model';
import { DeveloperPair } from './developer-pair.model';
/**
 * Assignment by pairs model
 */
export class AssignmentByPairs  {
    developers: Developer[];
    userStories: UserStory[];
    reverse: boolean;
    pairs?: DeveloperPair[];

    public static makeFromJson(json: AssignmentByPairs): AssignmentByPairs {
        const assignmentByPairs = new AssignmentByPairs();
        assignmentByPairs.developers = Developer.fromJSONMultiple(json.developers);
        assignmentByPairs.pairs = DeveloperPair.makeFromJsonArray(json.pairs);
        assignmentByPairs.userStories = UserStory.fromJSONMultiple(json.userStories);
        assignmentByPairs.reverse = json.reverse;
        return assignmentByPairs;
    }
}
