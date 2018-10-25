import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PageComponentsService {
  private full_page_component$$: Subject<boolean>;
  constructor() {
    this.full_page_component$$ = new Subject<boolean>();
    this.full_page_component$$.next(false);
   }

   public exit_full_page_component() {
     this.full_page_component$$.next(false);
   }

   public enter_in_page_component() {
    this.full_page_component$$.next(true);
  }

   public get_full_page_component_obs(): Observable<boolean> {
     return this.full_page_component$$.asObservable();
   }
}
