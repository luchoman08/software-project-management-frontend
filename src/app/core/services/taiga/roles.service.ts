import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../api.service';
import { Role } from '../../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class RolesService {
  constructor (
    private apiService: ApiService
  ) {}

  get(slug): Observable<Role> {
    return this.apiService.get('/roles/' + slug)
      .pipe(map(data => data));
  }
}