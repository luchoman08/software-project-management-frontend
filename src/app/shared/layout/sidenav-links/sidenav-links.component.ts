import { Component, OnInit } from '@angular/core';
import { AssignmentType } from 'app/core/enums';
declare interface RouteInfo {
  path: string;
  title: string;
  params: Object;
  icon: string;
  class: string;
}
const ROUTES: RouteInfo[] = [
  {
      path: 'assignment/uniquecost',
      params: {assign_type: AssignmentType.UNIQUE_COST},
      title: 'Simple Assignment',
      icon: 'unarchive',
      class: ''
  },
  {
      path: 'assignment/bypunctuation',
      params: {assign_type: AssignmentType.BY_PUNCTUATIONS},
      title: 'Assignment by Punctuation',
      icon: 'unarchive',
      class: ''
  },
  {
      path: 'assignment/bygroups',
      params: {assign_type: AssignmentType.HISTORTY_GROUPS},
      title: 'Assignment by groups',
      icon: 'unarchive',
      class: ''
  },
  {
      path: 'assignment/bypairs',
      title: 'Assignment by pairs',
      params: {},
      icon: 'unarchive',
      class: ''
  },

  { path: 'userstories/list', params: {}, title: 'List Simple User Stories',  icon: 'unarchive', class: '' },
  { path: 'userstories/listoneline', params: {}, title: 'One Line User Sotries',  icon: 'unarchive', class: '' },
  { path: 'developers',  params: {}, title: 'Detail Simple Developer',  icon: 'unarchive', class: '' },
];


@Component({
  selector: 'app-sidenav-links',
  templateUrl: './sidenav-links.component.html',
  styleUrls: ['./sidenav-links.component.scss']
})
export class SidenavLinksComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
