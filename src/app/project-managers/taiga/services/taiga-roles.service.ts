import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TaigaRole } from '../models';
import { map } from 'rxjs/operators/map';
import { TaigaApiService } from './taiga-api.service';

@Injectable()
export class TaigaRolesService {
  constructor (
    private apiService: TaigaApiService
  ) {}

  get(slug): Observable<TaigaRole> {
    return this.apiService.get('/roles/' + slug)
      .pipe(map(data => data));
  }



}
