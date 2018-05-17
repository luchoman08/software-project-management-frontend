import { SSAAsignacionSimpleInput } from '../../../../../story-assignment/story-assignment-ssa/models';
import { SimpleAssignmentInput } from '../../../../../../core/models/simple-assignment/simple-assignment-input.model';
import { ssaDesarrolladoresToSimpleDevelopers, simpleDevelopersTossaDesarrolladores } from './desarrollador-simple-interface';
import { ssaHistoriasToSimpleStories, simpleStoryToHistoriaSimple, simpleStoriesToHistoriasSimples } from './historia-simple-interface';

export function asignacionSimpleInputToSimpleAssingmentInput (
    ssaAsignacionSimpleInput: SSAAsignacionSimpleInput
): SimpleAssignmentInput {
    const simpleAssignmentInput: SimpleAssignmentInput = new SimpleAssignmentInput();
    simpleAssignmentInput.simpleDevelopers = ssaDesarrolladoresToSimpleDevelopers(ssaAsignacionSimpleInput.desarrolladores);
    simpleAssignmentInput.simpleUserStories = ssaHistoriasToSimpleStories(ssaAsignacionSimpleInput.historias);
    simpleAssignmentInput.hoursPointRelation = ssaAsignacionSimpleInput.relacion_horas_puntos;
    return simpleAssignmentInput;
}

export function simpleAssignmentInputToasignacionSimple(
    simpleAssignmentInput: SimpleAssignmentInput): SSAAsignacionSimpleInput {
        const ssaAsignacionSimpleInput: SSAAsignacionSimpleInput = new SSAAsignacionSimpleInput();
        ssaAsignacionSimpleInput.historias = simpleStoriesToHistoriasSimples(simpleAssignmentInput.simpleUserStories);
        ssaAsignacionSimpleInput.desarrolladores = simpleDevelopersTossaDesarrolladores(simpleAssignmentInput.simpleDevelopers);
        ssaAsignacionSimpleInput.relacion_horas_puntos = simpleAssignmentInput.hoursPointRelation;
        return ssaAsignacionSimpleInput;
    }
