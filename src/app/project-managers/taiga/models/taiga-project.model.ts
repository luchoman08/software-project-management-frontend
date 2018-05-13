import { TaigaMilestone } from './taiga-milestone.model';
import { TaigaMembership } from './taiga-membership.model';
export interface TaigaProject {
    id: string;
    members: TaigaMembership[];
    description: string;
    milestones: any[];
  }
