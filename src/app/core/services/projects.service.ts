import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, ProjectInterface } from '../models';
import { ApiService } from './api.service';


import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ProjectsService {
  constructor (
    private apiService: ApiService
  ) {}

  get(id): Observable<Project> {
    return this.apiService.get('/projects/' + id);
  }

  /*
    Return all projects where a given member is part of there
  */
  getByMemberId(member_id): Observable<Project[]> {
    const params = new HttpParams().set('member', String(member_id));
    return this.apiService.get('/projects', params)
    .pipe(
      map (
        (project: ProjectInterface[]) => {console.log('kha'); return project.map(Project.fromJSON); }));
  }
  getBySlug(slug): Observable<Project> {
    const params = new HttpParams().set('slug', String(slug));
    return this.apiService.get('/projects', params)
    .pipe(
      map ((project: ProjectInterface) =>  Project.fromJSON(project))
    );
  }
}

