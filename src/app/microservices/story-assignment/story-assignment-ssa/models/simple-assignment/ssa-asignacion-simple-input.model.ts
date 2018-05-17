import { SSADesarrolladorSimple, SSAHistoriaUsuarioSimple } from './';

export class SSAAsignacionSimpleInput {
    desarrolladores: SSADesarrolladorSimple[];
    historias: SSAHistoriaUsuarioSimple[];
    relacion_horas_puntos: number;
}
