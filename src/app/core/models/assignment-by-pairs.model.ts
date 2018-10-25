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
}
