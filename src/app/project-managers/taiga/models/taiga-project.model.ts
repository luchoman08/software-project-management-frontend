import { TaigaMilestone } from './taiga-milestone.model';
import { TaigaMembership } from './taiga-membership.model';
export interface TaigaProject {
    id: string;
    members: TaigaMembership[];
    description: string;
    slug: string;
    milestones: any[];
    created_date: string; // ej.  "2018-05-04T15:50:11.858Z"
  }
