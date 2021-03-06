import { IDeveloper } from './developer.interface';
import { Punctuation } from './punctuation';

export class Developer implements IDeveloper {
    id: string;
    full_name: string;
    role_name: string;
    punctuations: Punctuation[];
    available_hours_per_week: number;
    color: string;
    percentage_time_used?: number;


    public static fromJSON(json: IDeveloper): Developer {
        const developer: Developer = new Developer();
        developer.id = String(json.id);
        developer.full_name = json.full_name;
        developer.color = json.color;
        developer.role_name = json.role_name;
        developer.punctuations = json.punctuations ? json.punctuations.map(Punctuation.fromJSON) : new Array<Punctuation>();
        developer.available_hours_per_week = json.available_hours_per_week;
        developer.percentage_time_used = json.percentage_time_used ? json.percentage_time_used : 0;
        return developer;
    }
    public static fromJSONMultiple(idevelopers: IDeveloper[]): Developer[] {
        return idevelopers.map(this.fromJSON);
    }
    constructor() {
    }
}
