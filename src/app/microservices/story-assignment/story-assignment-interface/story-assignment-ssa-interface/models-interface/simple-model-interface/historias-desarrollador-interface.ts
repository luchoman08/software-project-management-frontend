import { SSAHistoriasDesarrolladorSimple } from '../../../../story-assignment-ssa/models';
import { SimpleDeveloperUserStoriesAssigned } from '../../../../../../core/models';
import { ssaDesarrolladoresToSimpleDevelopers, ssaDesarrolladorToSimpleDeveloper } from './desarrollador-simple-interface';
import { ssaHistoriasToSimpleStories } from './historia-simple-interface';

export function ssaTareasDesarrolladorSimpleToSimpleDeveloperUserStoriesAssigned (
    ssaHistoriasDesarrolladorSimple: SSAHistoriasDesarrolladorSimple
): SimpleDeveloperUserStoriesAssigned {
    const simpleDeveloperUserStoriesAssigned: SimpleDeveloperUserStoriesAssigned =  new SimpleDeveloperUserStoriesAssigned;
    simpleDeveloperUserStoriesAssigned.simpleDeveloper =
    ssaDesarrolladorToSimpleDeveloper(ssaHistoriasDesarrolladorSimple.desarrollador);
    simpleDeveloperUserStoriesAssigned.simpleUserStories =
    ssaHistoriasToSimpleStories(ssaHistoriasDesarrolladorSimple.historias);
    return simpleDeveloperUserStoriesAssigned;
}