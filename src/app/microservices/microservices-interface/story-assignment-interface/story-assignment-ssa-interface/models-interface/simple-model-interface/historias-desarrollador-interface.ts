import { SSAHistoriasDesarrolladorSimple } from '../../../../../story-assignment/story-assignment-ssa/models';
import { DeveloperUserStoriesAssigned } from '../../../../../../core/models';
import { ssaDesarrolladoresToSimpleDevelopers, ssaDesarrolladorToSimpleDeveloper } from './desarrollador-simple-interface';
import { ssaHistoriasToSimpleStories } from './historia-simple-interface';

export function ssaTareasDesarrolladorSimpleToSimpleDeveloperUserStoriesAssigned (
    ssaHistoriasDesarrolladorSimple: SSAHistoriasDesarrolladorSimple
): DeveloperUserStoriesAssigned {
    const simpleDeveloperUserStoriesAssigned: DeveloperUserStoriesAssigned =  new DeveloperUserStoriesAssigned;
    simpleDeveloperUserStoriesAssigned.developer =
    ssaDesarrolladorToSimpleDeveloper(ssaHistoriasDesarrolladorSimple.desarrollador);
    simpleDeveloperUserStoriesAssigned.userStories =
    ssaHistoriasToSimpleStories(ssaHistoriasDesarrolladorSimple.historias);
    return simpleDeveloperUserStoriesAssigned;
}
export function ssaTareasDesarrolladoresSimpleToSimpleDeveloperUserStoriesAssigned (
    ssaHistoriasDesarrolladoresSimple: SSAHistoriasDesarrolladorSimple []
): DeveloperUserStoriesAssigned[] {
    return ssaHistoriasDesarrolladoresSimple.map(ssaTareasDesarrolladorSimpleToSimpleDeveloperUserStoriesAssigned);
}