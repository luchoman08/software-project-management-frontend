import { SSADesarrolladorSimple } from '../../../../../story-assignment/story-assignment-ssa/models';
import { SimpleDeveloper } from '../../../../../../core/models';

export function ssaDesarrolladorToSimpleDeveloper (
    ssaDesarrolladorSimple: SSADesarrolladorSimple
): SimpleDeveloper {
    const simpleDeveloper: SimpleDeveloper = new SimpleDeveloper();
    simpleDeveloper.id = ssaDesarrolladorSimple.id_externo;
    simpleDeveloper.available_hours_per_week = ssaDesarrolladorSimple.horasDisponiblesSemana;
    simpleDeveloper.full_name = ssaDesarrolladorSimple.nombre;
    return simpleDeveloper;
}

export function ssaDesarrolladoresToSimpleDevelopers (
    ssaDesarrolladoresSimples: SSADesarrolladorSimple []
): SimpleDeveloper [] {
    return ssaDesarrolladoresSimples.map(ssaDesarrolladorToSimpleDeveloper);
}

export function simpleDeveloperTossaDesarrollador(
    simpleDeveloper: SimpleDeveloper
): SSADesarrolladorSimple {
    const ssaDesarrolladorSimple: SSADesarrolladorSimple = new SSADesarrolladorSimple();
    ssaDesarrolladorSimple.horasDisponiblesSemana = simpleDeveloper.available_hours_per_week;
    ssaDesarrolladorSimple.id_externo =  simpleDeveloper.id;
    ssaDesarrolladorSimple.nombre = simpleDeveloper.full_name;
    return ssaDesarrolladorSimple;
}

export function simpleDevelopersTossaDesarrolladores (
    simpleDevelopers: SimpleDeveloper[]
): SSADesarrolladorSimple[] {
    return simpleDevelopers.map(simpleDeveloperTossaDesarrollador);
}
