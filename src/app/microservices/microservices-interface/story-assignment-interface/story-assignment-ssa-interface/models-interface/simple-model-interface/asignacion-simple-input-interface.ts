import { SSAAsignacionSimpleInput } from '../../../../../story-assignment/story-assignment-ssa/models';
import { AssignmentInput } from '../../../../../../core/models/assignment-input.model';
import { ssaDesarrolladoresToSimpleDevelopers, simpleDevelopersTossaDesarrolladores } from './desarrollador-simple-interface';
import { ssaHistoriasToSimpleStories, simpleStoryToHistoriaSimple, simpleStoriesToHistoriasSimples } from './historia-simple-interface';

export function asignacionSimpleInputToSimpleAssingmentInput (
    ssaAsignacionSimpleInput: SSAAsignacionSimpleInput
): AssignmentInput {
    const simpleAssignmentInput: AssignmentInput = new AssignmentInput();
    simpleAssignmentInput.developers = ssaDesarrolladoresToSimpleDevelopers(ssaAsignacionSimpleInput.desarrolladores);
    simpleAssignmentInput.userStories = ssaHistoriasToSimpleStories(ssaAsignacionSimpleInput.historias);
    simpleAssignmentInput.hoursPointRelation = ssaAsignacionSimpleInput.relacion_horas_puntos;
    return simpleAssignmentInput;
}

export function simpleAssignmentInputToasignacionSimple(
    simpleAssignmentInput: AssignmentInput): SSAAsignacionSimpleInput {
        const ssaAsignacionSimpleInput: SSAAsignacionSimpleInput = new SSAAsignacionSimpleInput();
        ssaAsignacionSimpleInput.historias = simpleStoriesToHistoriasSimples(simpleAssignmentInput.userStories);
        ssaAsignacionSimpleInput.desarrolladores = simpleDevelopersTossaDesarrolladores(simpleAssignmentInput.developers);
        ssaAsignacionSimpleInput.relacion_horas_puntos = simpleAssignmentInput.hoursPointRelation;
        return ssaAsignacionSimpleInput;
    }
