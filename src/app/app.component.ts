import { Component, OnInit, ChangeDetectorRef, ViewChild, OnDestroy } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { SidenavService } from './core/services/sidenav.service';
import { MatSidenav } from '@angular/material';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { PageComponentsService, LoadingBarService } from './core/services';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
    public full_page_component: boolean;
    @ViewChild('snav') private snav: MatSidenav;
    mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    constructor(
        private pageComponentService: PageComponentsService,
        private sidenav: SidenavService,
        private router: Router,
        private changeDetectorRef: ChangeDetectorRef,
        private media: MediaMatcher) {
            this.makeSidenavResponsive();
            this.registerScrollToTopOnRouteChange();
    }
    private registerScrollToTopOnRouteChange() {
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
    }
    private makeSidenavResponsive() {
        this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
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
        this.sidenav.setSidenav(this.snav);
    }
}
