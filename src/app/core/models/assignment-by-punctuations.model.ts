import { Developer } from "./developer.model";
import { UserStory } from "./user-story.model";

export class AssignmentByPunctuation  {
    developers: Developer[];
    userStories: UserStory[];
    assign_same_quantity_of_tasks: boolean;
}