import { IDeveloper } from '../../core/models/developer.interface';
import { punctuations_mock, punctuations_mock_inverse } from './punctuations';
export const SIMPLEDEVELS: IDeveloper[] = [
    { id: '100', full_name: 'Luis Gerardo Manrique',
     color:  '#2196F3',  available_hours_per_week:  null,
     punctuations: punctuations_mock_inverse,
     role_name : 'Developer'},

     { id: '101', full_name: 'Jefferson Meneses',
     color:  'rgb(255, 87, 0)',  available_hours_per_week:  30,
     punctuations: punctuations_mock_inverse,
     role_name : 'Developer'},
     { id: '102', full_name: 'Jeison cardona',
     color:  'rgb(255, 87, 0)',  available_hours_per_week:  10,
     punctuations: punctuations_mock_inverse,
     role_name : 'Developer'}
  ];
