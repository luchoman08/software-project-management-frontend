import { Developer } from '.';
import { UserStory } from '.';

/**
 * User stories assigned to a given developer
 */
export class DeveloperUserStoriesAssigned {
    developer: Developer;
    userStories: UserStory[];
}
