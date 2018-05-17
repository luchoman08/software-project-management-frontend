import { SSAAsignacionSimpleOutput, SSAAsignacionSimpleInput } from '../../../../../story-assignment/story-assignment-ssa/models';
import { SimpleAssignmentOutput,
 } from '../../../../../../core/models/simple-assignment/simple-assignment-output.model';

 import { ssaTareasDesarrolladoresSimpleToSimpleDeveloperUserStoriesAssigned } from './historias-desarrollador-interface';

export function ssaAsignacionSimpleOutputToSimpleAssignmentOutput(
    ssaAsignacionSimpleOutput: SSAAsignacionSimpleOutput
): SimpleAssignmentOutput {
    const simpleAssignmentOutput: SimpleAssignmentOutput = new SimpleAssignmentOutput();
    simpleAssignmentOutput.assignmentErrors = ssaAsignacionSimpleOutput.errores;
    simpleAssignmentOutput.simpleDeveloperUserStoriesAssigned = ssaTareasDesarrolladoresSimpleToSimpleDeveloperUserStoriesAssigned(ssaAsignacionSimpleOutput.asignaciones);
    return simpleAssignmentOutput;
}
