import { Punctuation } from './punctuation';

export interface IDeveloper {
    id: string;
    full_name: string;
    role_name: string;
    available_hours_per_week: number;
    color: string;
    punctuations: Punctuation[];

    percentage_time_used?: number;
}
