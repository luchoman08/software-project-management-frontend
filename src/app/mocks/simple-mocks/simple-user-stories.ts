import { UserStory } from '../../core/models/';
import { punctuations_mock } from './punctuations';
export const SIMPLEUSERSTORIES: UserStory[] = [
  {
    id: '100',
    total_points: null,
    reference: 1,
    punctuations: punctuations_mock,
    subject: 'Crear usuarios '
  },
  {
    id: '101',
    total_points: null,
    reference: 2,
    punctuations: punctuations_mock,
    subject: 'Editar usuarios'
  },
  {
    id: '5',
    total_points: 12,
    reference: 4,
    subject: "Permitir reasignar historias de usuario",
    punctuations: punctuations_mock
  },
  {
    id: '18',
    total_points: 12,
    reference: 5,
    subject: "Permitir reasignacion en tiempo  real",
    punctuations: punctuations_mock
  },
  {
    id: '2239865',
    total_points: 12,
    reference: 1,
    subject: "Permitir el logueo en el sistema basado en los usuarios de el Campus Virtual, haciendo uso de sus nombres de usuario, contraseña y rol asignado en el Campus",
    punctuations: punctuations_mock
  },
  {
    id: '2252677',
    "total_points": 12,
    "reference": 2,
    "subject": "Permitir asignaciones basadas en un conjunto de historias resueltas",
    punctuations: punctuations_mock
  }
];
