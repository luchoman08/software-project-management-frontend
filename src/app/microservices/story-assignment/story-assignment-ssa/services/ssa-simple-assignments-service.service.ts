import { ApiService } from '../../../../core/services';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SSAAsignacionSimpleInput, SSAAsignacionSimpleOutput } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class SSAAsignacionSimpleService {
  constructor (
    private apiService: ApiService
  ) {}
/*
    Output is given by the form {id_developer: [ids_of_assigned_stories]
*/
  generarAsignacionSimple(asignacionSimpleInput: SSAAsignacionSimpleInput): Observable<SSAAsignacionSimpleOutput> {
    console.log(JSON.stringify(asignacionSimpleInput));
    return this.apiService.post('/asignacionsimple/', asignacionSimpleInput)
      .pipe(map((data: SSAAsignacionSimpleOutput) => data));
  }

  /*
    Return all projects where a given member is part of there
  */
}
