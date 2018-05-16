import { SSAAsignacionSimpleInput } from '../../../../story-assignment-ssa/models/simple-assignment/ssa-asignacion-simple-input.model';
import { SimpleAssignmentInput } from '../../../../../../core/models/simple-assignment/simple-assignment-input.model';
import { ssaDesarrolladoresToSimpleDevelopers } from './desarrollador-simple-interface';
import { ssaHistoriasToSimpleStories } from './historia-simple-interface';

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
    simpleAssignmentInput: SimpleAssignmentInput) {
        const simple
    }
