import { SimpleAssignmentDeveloper } from './';
import { SimpleAssignmentUserStory } from './';
export interface SimpleAssignment {
    desarrolladores: SimpleAssignmentDeveloper[];
    historias: SimpleAssignmentUserStory[];
    relacion_horas_puntos: number;
}
