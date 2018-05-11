export interface UserStory {
    id: string[];
    subject: string;
    points: any[]; //array of dict[id_role: id_point]
    assigned_users: any[]; 
  }
