import { Developer } from './';
import { UserStory } from './';
export class AssignmentInput {
    developers: Developer[];
    userStories: UserStory[];
    hoursPointRelation: number; // how match hours of work are necesary for one point
}
