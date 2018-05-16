import { ApiService } from '../../../core/services/';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SSAAsignacionSimpleInput } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class TaigaProjectsService {
  constructor (
    private apiService: ApiService
  ) {}
/*
    Output is given by the form {id_developer: [ids_of_assigned_stories]
*/
  patch(SSAAsignacionSimpleInput): Observable<JSON> {
    return this.apiService.get('/asignacionsimple/' + id)
      .pipe(map(data => data));
  }

  /*
    Return all projects where a given member is part of there
  */
}