import { IDeveloperPair } from '../../core/models/developer-pair.model';
import { SIMPLEDEVELS } from './simple-developers';

export const PAIRS: IDeveloperPair[] = [
    {
        developer1 : SIMPLEDEVELS[0],
        developer2 : SIMPLEDEVELS[1],
        id : 0,
        nombre: 'Pareja 1',
        compatibility: 50
    },
    {
        developer1 : SIMPLEDEVELS[1],
        developer2 : SIMPLEDEVELS[2],
        id : 1,
        nombre: 'Pareja 2',
        compatibility: 80
    }
]