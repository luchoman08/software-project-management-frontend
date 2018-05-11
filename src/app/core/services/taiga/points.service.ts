import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../api.service';
import { Point } from '../../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class PointsService {
  constructor (
    private apiService: ApiService
  ) {}

  get(slug): Observable<Point> {
    return this.apiService.get('/points/' + slug)
      .pipe(map(data => data));
  }
}
