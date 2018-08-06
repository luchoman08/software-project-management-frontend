import { Developer } from '../models/developer.model';
import { UserStory } from '../models/user-story.model';
import { totalUserStoryPoints } from './userStories.lib';
export function developerPercentageOcupation(
    developer: Developer,
    relation_points_hours: number,
    userStories: UserStory[],
    daysOfWork: number): number {
        console.log(
            totalUserStoryPoints(userStories)     * relation_points_hours * 100, 'horas por historia', developer.available_hours_per_week /  5 * daysOfWork, 'horas disponibles en el sprint');
    return  (totalUserStoryPoints(userStories) * relation_points_hours * 100  ) / (developer.available_hours_per_week / 5 * daysOfWork);
}
