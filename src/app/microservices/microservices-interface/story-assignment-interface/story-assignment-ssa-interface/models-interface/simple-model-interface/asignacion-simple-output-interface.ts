import { SSAAsignacionSimpleOutput } from '../../../../../story-assignment/story-assignment-ssa/models';
import { SimpleAssignmentOutput } from '../../../../../../core/models/simple-assignment/simple-assignment-output.model';


export function ssaAsignacionSimpleOutputToSimpleAssignmentOutput(
    ssaAsignacionSimpleOutput: SSAAsignacionSimpleOutput
): SimpleAssignmentOutput {
    const simpleAssignmentOutput: SimpleAssignmentOutput = new SimpleAssignmentOutput();
    simpleAssignmentOutput.assignmentErrors = ssaAsignacionSimpleOutput.errores;
    // to do simpleAssignmentOutput.asignaciones
    return simpleAssignmentOutput;
}
