import { TaigaMembership } from '../../../../../project-managers/taiga/models/';
import { Developer } from '../../../../../core/models/';

export function taigaMembershipToSimpleDeveloper(
    taigaMembership: TaigaMembership): Developer {
        const developer: Developer = new Developer();
        developer.id = taigaMembership.id;
        developer.color = taigaMembership.color;
        developer.full_name = taigaMembership.full_name;
        developer.role_name = taigaMembership.role_name;
        return developer;
    }

export function taigaMembershipsToSimpleDevelopers(
    taigaMemberships: TaigaMembership[]): Developer[] {
        return taigaMemberships.map(taigaMembershipToSimpleDeveloper);
    }
