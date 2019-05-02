import { UserStory } from './user-story.model';
import { v4 as uuid } from 'uuid';

export abstract class  AbstractUserStoryGroup {
    id: string;
    name: string;
    user_stories: UserStory[];
}
export interface  UserStoryGroupOptions {
    name: string;
    user_stories?: UserStory[];
}

export class UserStoryGroup extends AbstractUserStoryGroup {

    static make(options: UserStoryGroupOptions): UserStoryGroup {
        const user_story_group = new UserStoryGroup();
        user_story_group.id = uuid();
        user_story_group.name = options.name;
        user_story_group.user_stories = options.user_stories ? options.user_stories : new Array<UserStory>();
        return user_story_group;
    }
}
