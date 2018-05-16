import { SSAAsignacionSimpleOutput } from '../../../../story-assignment-ssa/models/simple-assignment/ssa-asignacion-simple-output.model';
import { SimpleAssignmentOutput } from '../../../../../../core/models/simple-assignment/simple-assignment-output.model';


function ssaAsignacionSimpleOutputToSimpleAssignmentOutput(
    ssaAsignacionSimpleOutput: SSAAsignacionSimpleOutput
): SimpleAssignmentOutput {
    const simpleAssignmentOutput: SimpleAssignmentOutput = new SimpleAssignmentOutput();
    simpleAssignmentOutput.assignmentErrors = ssaAsignacionSimpleOutput.errores;
    // to do simpleAssignmentOutput.asignaciones
    return simpleAssignmentOutput;
}
