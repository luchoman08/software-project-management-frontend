import { TaigaProject } from '../../../../../project-managers/taiga/models';
import { Project } from '../../../../../core/models';

export function taigaProjectToSimpleProject(
    taigaProject: TaigaProject): Project {
        const simpleProject: Project = new Project();
        simpleProject.id = taigaProject.id;
        simpleProject.description = taigaProject.description;
        simpleProject.name = taigaProject.name;
        simpleProject.created_date = taigaProject.created_date;
        return simpleProject;
    }

export function taigaProjectsToSimpleProjects(
    taigaMilestones: TaigaProject[]): Project[] {
        return taigaMilestones.map(taigaProjectToSimpleProject);
    }
