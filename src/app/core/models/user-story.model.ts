import { Punctuation } from "./punctuation";
import { UserStoryInterface } from "./generics/user-story.interface";

export class UserStory{
    id: string;
    total_points: number;
    subject: string;
    assigned_to?: string;
    punctuations: Punctuation[];
    reference: number; // number assigned to the history into a sprint

    public static fromJSON(iUserStory: UserStoryInterface): UserStory {
        let userStory = new UserStory();
        userStory.id = iUserStory.id;
        userStory.total_points = iUserStory.total_points;
        userStory.subject = iUserStory.subject;
        userStory.assigned_to = iUserStory.assigned_to;
        userStory.punctuations = iUserStory.punctuations.map(Punctuation.fromJSON);
        userStory.reference = iUserStory.reference;
        return userStory;
    }
}