import { ProjectInterface } from './';
import { Developer} from './developer.model';
import { UserStory } from './user-story.model';
import { Sprint} from './sprint.model';
import { Point } from './point.model';
export class Project implements ProjectInterface {
    id: string;
    created_date: string; // long format
    description: string;
    sprints: Sprint[];
    points: Point[];
    developers: Developer[];
    name: string;
    public static fromJSON(iproject: ProjectInterface): Project {
        let project = new Project();
        project.id = iproject.id;
        project.created_date = iproject.created_date;
        project.description = iproject.description;
        //project.sprints = iproject.sprints.map(Sprint.fromJSON) ;
        project.points = iproject.points.map(Point.fromJSON);
        project.developers = iproject.developers.map(Developer.fromJSON);
        project.name = iproject.name; 
        return project;
    }
}
