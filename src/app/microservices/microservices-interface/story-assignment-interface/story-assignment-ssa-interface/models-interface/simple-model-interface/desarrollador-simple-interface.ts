import { SSADesarrolladorSimple } from '../../../../../story-assignment/story-assignment-ssa/models';
import { Developer } from '../../../../../../core/models';

export function ssaDesarrolladorToSimpleDeveloper (
    ssaDesarrolladorSimple: SSADesarrolladorSimple
): Developer {
    const developer: Developer = new Developer();
    developer.id = ssaDesarrolladorSimple.id_externo;
    developer.available_hours_per_week = ssaDesarrolladorSimple.horasDisponiblesSemana;
    developer.full_name = ssaDesarrolladorSimple.nombre;
    return developer;
}

export function ssaDesarrolladoresToSimpleDevelopers (
    ssaDesarrolladoresSimples: SSADesarrolladorSimple []
): Developer [] {
    return ssaDesarrolladoresSimples.map(ssaDesarrolladorToSimpleDeveloper);
}

export function simpleDeveloperTossaDesarrollador(
    developer: Developer
): SSADesarrolladorSimple {
    const ssaDesarrolladorSimple: SSADesarrolladorSimple = new SSADesarrolladorSimple();
    ssaDesarrolladorSimple.horasDisponiblesSemana = developer.available_hours_per_week;
    ssaDesarrolladorSimple.id_externo =  developer.id;
    ssaDesarrolladorSimple.nombre = developer.full_name;
    return ssaDesarrolladorSimple;
}

export function simpleDevelopersTossaDesarrolladores (
    developers: Developer[]
): SSADesarrolladorSimple[] {
    return developers.map(simpleDeveloperTossaDesarrollador);
}
