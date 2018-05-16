import { SSADesarrolladorSimple, SSAHistoriaUsuarioSimple } from './';

export interface SSAAsignacionSimpleInput {
    desarrolladores: SSADesarrolladorSimple[];
    historias: SSAHistoriaUsuarioSimple[];
    relacion_horas_puntos: number;
}