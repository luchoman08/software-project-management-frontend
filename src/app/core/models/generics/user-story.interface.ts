import { Punctuation } from '../punctuation';

export interface UserStoryInterface {
    id: string;
    total_points: number;
    subject: string;
    assigned_to?: string;
    punctuations: Punctuation[];
    reference: number; // number assigned to the history into a sprint
}
