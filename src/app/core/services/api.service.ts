import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';
import { JwtService } from './jwt.service';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';
@Injectable()
export class ApiService {
  public api_url = environment.api_project_management;
  constructor(
    private http: HttpClient,
    private jwtService: JwtService
  ) {}

  private formatErrors(error: any) {
    return new ErrorObservable(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${this.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }
  patch(path: string, body: Object = {}): Observable<any> {
    return this.http.patch(
      `${this.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(tap(response => console.log(response)), catchError(this.formatErrors));
  }
  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${this.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${this.api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
