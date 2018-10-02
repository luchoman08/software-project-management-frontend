import { Developer } from "./developer.model";


export class DeveloperPair {
    id: number;
    nombre?: string;
    developer1: Developer;
    developer2: Developer;
    compatibility: number; // from 0 to 100
}