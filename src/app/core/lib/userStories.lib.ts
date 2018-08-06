import { UserStory } from '../models/user-story.model';
export function totalUserStoryPoints(userStories: UserStory[]): number {
    let totalPoints = 0;
    for (const userStory of userStories) {
      totalPoints += userStory.total_points;
    }
    return totalPoints;
  }
