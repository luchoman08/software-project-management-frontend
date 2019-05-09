import { Component, OnInit } from '@angular/core';

import { PageComponentsService, LoadingBarService } from './core/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public full_page_component: boolean;
    constructor(
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

    }

}
