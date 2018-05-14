import { TaigaProject } from '../../../../../project-managers/taiga/models';
import { SimpleProject } from '../../../../../core/models';

export function taigaProjectToSimpleProject(
    taigaProject: TaigaProject): SimpleProject {
        const simpleProject: SimpleProject = new SimpleProject();
        simpleProject.id = taigaProject.id;
        simpleProject.description = taigaProject.description;
        simpleProject.created_date = taigaProject.created_date;
        return simpleProject;
    }

export function taigaProjectsToSimpleProjects(
    taigaMilestones: TaigaProject[]): SimpleProject[] {
        return taigaMilestones.map(taigaProjectToSimpleProject);
    }
