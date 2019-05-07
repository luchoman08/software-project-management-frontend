import { Developer } from './developer.model';
import { UserStory } from './user-story.model';
export class AssignmentByUniqueCost {
    developers: Developer[];
    userStories: UserStory[];
    relationHoursPoints: number; // how much hours of work are necesary for one point
    startDate: Date;
    endDate: Date;

    static fromJSON(json: AssignmentByUniqueCost): AssignmentByUniqueCost {
        const assignment = new AssignmentByUniqueCost();
        assignment.developers = Developer.fromJSONMultiple(json.developers);
        assignment.startDate = new Date(json.startDate);
        assignment.endDate = new Date(json.endDate);
        assignment.relationHoursPoints = json.relationHoursPoints;
        assignment.userStories = UserStory.fromJSONMultiple(json.userStories);
        return assignment;
    }
}

