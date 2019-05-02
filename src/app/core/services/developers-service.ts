import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Developer } from '../models';
import { map } from 'rxjs/operators';
import { IDeveloper } from '../models/developer.interface';

@Injectable()
export class DevelopersService {

  constructor ( private apiService: ApiService) {  }

  get(slug): Observable<Developer> {
    return this.apiService.get('/developers/' + slug)
    .pipe(map(data => data));
  }
  getProjectDevelopers(project_id): Observable<Developer[]> {
    const params = new HttpParams().set('project', String(project_id));
    return this.apiService.get('/developers', params)
    .pipe(map((developers: IDeveloper[]) => developers.map(Developer.fromJSON)));
      }
    }
