import { Developer } from '.';
import { UserStory } from '.';
export class AssignmentInput {
    developers: Developer[];
    userStories: UserStory[];
    relationHoursPoints: number; // how much hours of work are necesary for one point
    startDate: Date;
    endDate: Date;

    static fromJSON(json: AssignmentInput): AssignmentInput {
        const assignment = new AssignmentInput();
        assignment.developers = Developer.fromJSONMultiple(json.developers);
        assignment.startDate = new Date(json.startDate);
        assignment.endDate = new Date(json.endDate);
        assignment.relationHoursPoints = json.relationHoursPoints;
        assignment.userStories = UserStory.fromJSONMultiple(json.userStories);
        return assignment;
    }
}

