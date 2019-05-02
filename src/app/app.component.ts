import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';

import {
    Router,
    NavigationEnd,
    NavigationStart
    } from '@angular/router';

import { Subscription ,  Observable } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { PageComponentsService } from './core/services';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    public full_page_component: boolean;
    constructor(
        private location: Location,
        private _location: LocationStrategy,
        private router: Router,
        private pageComponentService: PageComponentsService,
        public loader: LoadingBarService) {
            this.full_page_component = false;
            this.pageComponentService
            .get_full_page_component_obs()
            .subscribe(
                nextVal => {
                    this.full_page_component = nextVal;
                }
            );
        }

    ngOnInit() {
        const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function

            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        } else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        const elemMainPanel: HTMLElement | undefined = <HTMLElement>document.querySelector('.main-panel');
        const elemSidebar: HTMLElement | undefined = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

        this.location.subscribe((ev: PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });
         this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationStart) {
               if (event.url !== this.lastPoppedUrl) {
                   this.yScrollStack.push(window.scrollY);
               }
           } else if (event instanceof NavigationEnd) {
               if (event.url === this.lastPoppedUrl) {
                   this.lastPoppedUrl = undefined;
                   window.scrollTo(0, this.yScrollStack.pop());
               } else {
                   window.scrollTo(0, 0);
               }
           }
        });
        this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
             if ( elemMainPanel ) {
                elemMainPanel.scrollTop = 0;
             }
             if ( elemSidebar ) {
             elemSidebar.scrollTop = 0;
             }
        });

    }

    isMaps(path) {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if (path === titlee) {
            return false;
        } else {
            return true;
        }
    }

    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
