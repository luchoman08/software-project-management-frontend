import { DeveloperUserStoriesAssigned } from './';
import { UserStory } from './user-story.model';
import { Developer } from './developer.model';
export class SimpleAssignmentOutput {
    simpleDeveloperUserStoriesAssigned: DeveloperUserStoriesAssigned[];
    assignmentErrors: string [];
    public fromJSON(json: {assignmentErrors: string [],simpleDeveloperUserStoriesAssigned:  DeveloperUserStoriesAssigned[]}){
        this.simpleDeveloperUserStoriesAssigned = json.simpleDeveloperUserStoriesAssigned;
        this.assignmentErrors = json.assignmentErrors;
    }
    private totalUserStoryPoints(userStories: UserStory[]): number {
        let totalPoints = 0;
        for (const userStory of userStories) {
          totalPoints += userStory.total_points;
        }
        return totalPoints;
      }
    private developerPercentageOcupation(developer: Developer, userStories: UserStory[]): number {
        return  this.totalUserStoryPoints(userStories) * 100 / developer.available_hours_per_week;
      }
}
