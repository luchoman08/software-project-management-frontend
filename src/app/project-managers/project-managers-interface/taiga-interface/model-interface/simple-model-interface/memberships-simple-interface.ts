import { TaigaMembership } from '../../../../../project-managers/taiga/models/';
import { SimpleDeveloper } from '../../../../../core/models/';

export function taigaMembershipToSimpleDeveloper(
    taigaMembership: TaigaMembership): SimpleDeveloper {
        const simpleDeveloper: SimpleDeveloper = new SimpleDeveloper();
        simpleDeveloper.id = taigaMembership.id;
        simpleDeveloper.color = taigaMembership.color;
        simpleDeveloper.full_name = taigaMembership.full_name;
        simpleDeveloper.role_name = taigaMembership.role_name;
        return simpleDeveloper;
    }

export function taigaMembershipsToSimpleDevelopers(
    taigaMemberships: TaigaMembership[]): SimpleDeveloper[] {
        return taigaMemberships.map(taigaMembershipToSimpleDeveloper);
    }
