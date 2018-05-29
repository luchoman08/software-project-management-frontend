import { DeveloperUserStoriesAssigned } from './';
import { UserStory } from './user-story.model';
export class SimpleAssignmentOutput {
    simpleDeveloperUserStoriesAssigned: DeveloperUserStoriesAssigned[];
    assignmentErrors: string [];
    public fromJSON(json: {assignmentErrors: string [],simpleDeveloperUserStoriesAssigned:  DeveloperUserStoriesAssigned[]}){
        this.simpleDeveloperUserStoriesAssigned = json.simpleDeveloperUserStoriesAssigned;
        this.assignmentErrors = json.assignmentErrors;
    }
    private totalUserStoryPoints(userStories: UserStory[]): number {
        let totalPoints: number = 0;
        for(let userStory of userStories) {
          totalPoints += userStory.total_points;
        }
        return totalPoints;
      }
    private developerPercentageOcupation(developerAssignment: DeveloperUserStoriesAssigned) {
        console.log("una vez y otra mas hasta juntos terminar ");
        return  this.totalUserStoryPoints(developerAssignment.userStories) * 100 / developerAssignment.developer.available_hours_per_week;
      }
    private initDevelopersPercentageTimeUsed(): void {
        for (let simpleDeveloperUserStoriesAssign of this.simpleDeveloperUserStoriesAssigned) {
            simpleDeveloperUserStoriesAssign.developer.percentage_time_used = 
            this.developerPercentageOcupation(simpleDeveloperUserStoriesAssign);
        }
    }
    public init(){
        this.initDevelopersPercentageTimeUsed();
    }
}
