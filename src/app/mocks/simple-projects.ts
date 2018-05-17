import { SimpleDeveloper, SimpleUserStory, SimpleSprint} from '../core/models';
export class SimpleProject  {
    id: string;
    created_date: string; // long format
    description: string;
    sprints: SimpleSprint[];
    simpleDevelopers: SimpleDeveloper[];
    simpleUserStories: SimpleUserStory[];
}
