import { Sprint } from '../';

export interface ProjectInterface {
    id: string;
    created_date?: string; // long format
    description: string;
    sprints: Sprint[];
}
