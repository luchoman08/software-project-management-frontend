import { SprintInterface } from './generics/sprint.interface';
import { UserStory } from './';

export class Sprint implements SprintInterface {
    id: string;
    name: string;
    estimated_start: string; //  iso date (YYYY-MM-DD)
    estimated_finish: string; // iso date (YYYY-MM-DD)
    user_stories: UserStory[];
}
