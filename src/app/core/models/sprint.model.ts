import { SprintInterface } from './generics/sprint.interface';
import { UserStory } from './user-story.model';

export class Sprint implements SprintInterface {
    id: string;
    name: string;
    estimated_start: string; //  iso date (YYYY-MM-DD)
    estimated_finish: string; // iso date (YYYY-MM-DD)
    user_stories: UserStory[];

    public static fromJSON(isprint: SprintInterface): Sprint {
        let sprint = new Sprint();
        sprint.id = isprint.id;
        sprint.name = isprint.name;
        sprint.estimated_start = isprint.estimated_start;
        sprint.estimated_finish = isprint.estimated_finish;
        sprint.user_stories = isprint.user_stories.map(UserStory.fromJSON);
        return sprint;
    }

}
