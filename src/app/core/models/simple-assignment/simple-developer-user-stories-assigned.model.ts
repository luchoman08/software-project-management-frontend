import { SimpleDeveloper } from './simple-developer.model';
import { SimpleUserStory } from './simple-user-story.model';

/**
 * User stories assigned to a given developer
 */
export class SimpleDeveloperUserStoriesAssigned {
    simpleDeveloper: SimpleDeveloper;
    simpleUserStories: SimpleUserStory[];
}
