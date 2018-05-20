import { SSAHistoriaUsuarioSimple } from '../../../../../story-assignment/story-assignment-ssa/models';
import { UserStory } from '../../../../../../core/models/user-story.model';


export function ssaHistoriaToSimpleStory(
    historiaUsuarioSimple: SSAHistoriaUsuarioSimple):
    UserStory {
        const simpleUserStory: UserStory = new UserStory();
        simpleUserStory.id = historiaUsuarioSimple.id_externo;
        simpleUserStory.points = historiaUsuarioSimple.puntuacionGeneral;
        simpleUserStory.subject = historiaUsuarioSimple.descripcion;
        return simpleUserStory;
}

export function ssaHistoriasToSimpleStories (
    historiasUsuarioSimples: SSAHistoriaUsuarioSimple[]):
    UserStory[] {
        return historiasUsuarioSimples.map(ssaHistoriaToSimpleStory);
}


export function simpleStoryToHistoriaSimple(
    simpleUserStory: UserStory):
    SSAHistoriaUsuarioSimple {
        const historiaUsuarioSimple: SSAHistoriaUsuarioSimple = new SSAHistoriaUsuarioSimple();
        historiaUsuarioSimple.id_externo = simpleUserStory.id;
        historiaUsuarioSimple.puntuacionGeneral = simpleUserStory.points;
        historiaUsuarioSimple.descripcion = simpleUserStory.subject;
        return historiaUsuarioSimple;
}
export function simpleStoriesToHistoriasSimples (
    userStories: UserStory []
): SSAHistoriaUsuarioSimple [] {
    return userStories.map (simpleStoryToHistoriaSimple);
}