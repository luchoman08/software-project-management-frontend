import { IDeveloper } from "./developer.interface";

export class Developer implements IDeveloper {
    id: string;
    full_name: string;
    role_name: string;
    available_hours_per_week: number;
    color: string;
    percentage_time_used?: number;

    constructor() {
        
    }
    public fromJSON(json: IDeveloper) {
        this.id = json.id;
        this.full_name = json.full_name;
        this.color = json.color;
        this.role_name = json.color;
        this.available_hours_per_week = json.available_hours_per_week;
        this.percentage_time_used = json.percentage_time_used? json.percentage_time_used: 0;
    }
}
