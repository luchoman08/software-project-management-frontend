import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../../core/services';
import { TaigaPoint } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class TaigaPointsService {
  constructor (
    private apiService: ApiService
  ) {}

  get(slug): Observable<TaigaPoint> {
    return this.apiService.get('/points/' + slug)
      .pipe(map(data => data));
  }
}
