import { SSAHistoriaUsuarioSimple } from '../../../../../story-assignment/story-assignment-ssa/models';
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


export function simpleStoryToHistoriaSimple(
    simpleUserStory: SimpleUserStory):
    SSAHistoriaUsuarioSimple {
        const historiaUsuarioSimple: SSAHistoriaUsuarioSimple = new SSAHistoriaUsuarioSimple();
        historiaUsuarioSimple.id_externo = simpleUserStory.id;
        historiaUsuarioSimple.puntuacionGeneral = simpleUserStory.points;
        historiaUsuarioSimple.descripcion = simpleUserStory.subject;
        return historiaUsuarioSimple;
}
export function simpleStoriesToHistoriasSimples (
    simpleUserStories: SimpleUserStory []
): SSAHistoriaUsuarioSimple [] {
    return simpleUserStories.map (simpleStoryToHistoriaSimple);
}