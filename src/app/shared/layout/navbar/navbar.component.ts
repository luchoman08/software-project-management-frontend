import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'app/core/services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    constructor(private sidenav: SidenavService) {
    }
    toggleRightSidenav() {
        this.sidenav.toggle();
    }
    ngOnInit() {

    }

}
