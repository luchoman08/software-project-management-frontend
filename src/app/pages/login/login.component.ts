import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageComponentsService } from 'app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string;
  password: string;
  constructor(
    private pageComponentService: PageComponentsService
  ) { }
   ngOnDestroy() {
    this.pageComponentService.exit_full_page_component();
   }
  ngOnInit() {
    this.pageComponentService.enter_in_page_component();
  }

}
