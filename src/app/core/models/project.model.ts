import { ProjectInterface } from './';
import { Developer, UserStory, Sprint} from './';
export class Project implements ProjectInterface {
    id: string;
    created_date: string; // long format
    description: string;
    sprints: Sprint[];
    developers: Developer[];
    userStories: UserStory[];
    name: string;
}
