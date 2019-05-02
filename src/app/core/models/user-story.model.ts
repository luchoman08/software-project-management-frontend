import { Punctuation } from './punctuation';
import { UserStoryInterface } from './generics/user-story.interface';
import { Developer } from './developer.model';

export class UserStory {
    id: string;
    total_points: number;
    subject: string;
    assigned_to?: string | Array<String>; // can be assigned to various developers
    punctuations: Punctuation[];
    reference: number; // number assigned to the history into a sprint

    public static fromJSON(json: UserStory): UserStory {
        const userStory = new UserStory();
        userStory.id = json.id;
        userStory.total_points = json.total_points;
        userStory.subject = json.subject;
        userStory.assigned_to = json.assigned_to;
        userStory.punctuations = json.punctuations.map(Punctuation.fromJSON);
        userStory.reference = json.reference;
        return userStory;
    }
    public static fromJSONMultiple(userStories: UserStory[]): UserStory[] {
        return userStories.map(UserStory.fromJSON);
    }
    public  assignedTo(developer: Developer): boolean {
        if (typeof this.assigned_to === 'string') {
            return this.assigned_to === String(developer.id);
        } else if (Array.isArray(this.assigned_to) ) {
            return this.assigned_to.includes( String(developer.id ));
        }
    }
}
