import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../../core/services';
import { TaigaRole } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class TaigaRolesService {
  constructor (
    private apiService: ApiService
  ) {}

  get(slug): Observable<TaigaRole> {
    return this.apiService.get('/roles/' + slug)
      .pipe(map(data => data));
  }



}
