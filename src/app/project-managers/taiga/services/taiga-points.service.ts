import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TaigaPoint } from '../models';
import { map } from 'rxjs/operators/map';
import { TaigaApiService } from './taiga-api.service';

@Injectable()
export class TaigaPointsService {
  constructor (
    private apiService: TaigaApiService
  ) {}

  get(slug): Observable<TaigaPoint> {
    return this.apiService.get('/points/' + slug)
      .pipe(map(data => data));
  }
}
