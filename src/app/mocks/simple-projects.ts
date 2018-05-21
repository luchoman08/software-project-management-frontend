import { Developer, UserStory, Sprint} from '../core/models';
export class Project  {
    id: string;
    created_date: string; // long format
    description: string;
    sprints: Sprint[];
    developers: Developer[];
    userStories: UserStory[];
}
