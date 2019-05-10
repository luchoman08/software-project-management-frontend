import { Component, OnInit, ChangeDetectorRef, ViewChild, OnDestroy } from '@angular/core';

import { PageComponentsService, LoadingBarService } from './core/services';
import { MediaMatcher } from '@angular/cdk/layout';
import { SidenavService } from './core/services/sidenav.service';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public full_page_component: boolean;
    @ViewChild('snav') snav: MatSidenav;
    mobileQuery: MediaQueryList;
    fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
    private _mobileQueryListener: () => void;

    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    constructor(
        private pageComponentService: PageComponentsService,
        private sidenav: SidenavService,
        changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
            this.mobileQuery = media.matchMedia('(max-width: 600px)');
            this._mobileQueryListener = () => changeDetectorRef.detectChanges();
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
    toggleRightSidenav() {
        this.sidenav.toggle();
    }
    ngOnInit() {
        this.sidenav.setSidenav(this.snav);
    }

}
