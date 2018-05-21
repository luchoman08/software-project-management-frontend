import { Developer } from './developer.model';

export class UserStory {
    id: string;
    total_points: number;
    subject: string;
    assignedUser?: Developer;
    reference: number; // number assigned to the history into a sprint 
    
}
