import { ProjectInterface } from '../generics';
import { Sprint } from '../';
import { SimpleDeveloper, SimpleUserStory} from './';
export class SimpleProject implements ProjectInterface {
    id: string;
    created_date: string; // long format
    description: string;
    sprints: Sprint[];
    simpleDevelopers: SimpleDeveloper[];
    SimpleUserStories: SimpleUserStory[];
}
