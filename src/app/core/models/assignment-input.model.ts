import { Developer } from './';
import { UserStory } from './';
export class AssignmentInput {
    developers: Developer[];
    userStories: UserStory[];
    relationHoursPoints: number; // how much hours of work are necesary for one point
    startDate: Date;
    endDate: Date;
}
