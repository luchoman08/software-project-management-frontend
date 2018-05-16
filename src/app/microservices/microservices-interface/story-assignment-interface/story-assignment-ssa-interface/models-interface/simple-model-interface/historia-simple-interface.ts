import { SSAHistoriaUsuarioSimple } from '../../../../story-assignment-ssa/models/simple-assignment/ssa-historia-usuario-simple.model';
import { SimpleUserStory } from '../../../../../../core/models/simple-assignment/simple-user-story.model';


export function ssaHistoriaToSimpleStory(
    historiaUsuarioSimple: SSAHistoriaUsuarioSimple):
    SimpleUserStory {
        const simpleUserStory: SimpleUserStory = new SimpleUserStory();
        simpleUserStory.id = historiaUsuarioSimple.id_externo;
        simpleUserStory.points = historiaUsuarioSimple.puntuacionGeneral;
        simpleUserStory.subject = historiaUsuarioSimple.descripcion;
        return simpleUserStory;
}

export function ssaHistoriasToSimpleStories (
    historiasUsuarioSimples: SSAHistoriaUsuarioSimple[]):
    SimpleUserStory[] {
        return historiasUsuarioSimples.map(ssaHistoriaToSimpleStory);
}
