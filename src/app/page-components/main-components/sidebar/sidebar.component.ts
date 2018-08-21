import { Component, OnInit } from '@angular/core';
import { AssignmentType } from '../../../core/enums';

declare const $: any;
export declare interface RouteInfo {
    path: string;
    title: string;
    params: Object;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'assignment/uniquecost', params: {assign_type: AssignmentType.UNIQUE_COST},  title: 'Simple Assignment',  icon: 'unarchive', class: '' },
    { path: 'assignment/bypunctuation', params: {assign_type: AssignmentType.BY_PUNCTUATIONS},  title: 'Assignment by Punctuation',  icon: 'unarchive', class: '' },
    { path: 'userstories/list', params: {}, title: 'List Simple User Stories',  icon: 'unarchive', class: '' },
    { path: 'userstories/listoneline', params: {}, title: 'One Line User Sotries',  icon: 'unarchive', class: '' },
    { path: 'developers',  params: {}, title: 'Detail Simple Developer',  icon: 'unarchive', class: '' },
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
