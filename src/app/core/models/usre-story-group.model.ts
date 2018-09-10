import { UserStory } from "./user-story.model";

export class UserStoryGroup {
    id: string;
    name: string;
    user_stories: UserStory[];
}