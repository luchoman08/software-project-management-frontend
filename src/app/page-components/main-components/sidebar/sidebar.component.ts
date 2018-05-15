import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'simpleassignment', title: 'Simple Assignment',  icon: 'unarchive', class: '' },
    { path: 'userstories/simplestory/list', title: 'List Simple User Stories',  icon: 'unarchive', class: '' },
    { path: 'userstories/simplestory/listoneline', title: 'One Line User Sotries',  icon: 'unarchive', class: '' },
    { path: 'developers/simpledeveloper', title: 'Detail Simple Developer',  icon: 'unarchive', class: '' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
