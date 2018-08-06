import { Sprint } from "../sprint.model";
import { Developer } from "../developer.model";
import { UserStory } from "../user-story.model";
import { Point } from "../point.model";

export interface ProjectInterface {
    id: string;
    created_date: string; // long format
    description: string;
    sprints: Sprint[];
    points: Point[];
    developers: Developer[];
    name: string;

}
