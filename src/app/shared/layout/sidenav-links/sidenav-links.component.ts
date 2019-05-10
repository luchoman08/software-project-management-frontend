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
      title: 'Puntuación única',
      icon: 'unarchive',
      class: ''
  },
  {
      path: 'assignment/bypunctuation',
      params: {assign_type: AssignmentType.BY_PUNCTUATIONS},
      title: 'Puntuación multiple',
      icon: 'unarchive',
      class: ''
  },
  {
      path: 'assignment/bygroups',
      params: {assign_type: AssignmentType.HISTORTY_GROUPS},
      title: 'Historias agrupadas',
      icon: 'unarchive',
      class: ''
  },
  {
      path: 'assignment/bypairs',
      title: 'Programación en parejas',
      params: {},
      icon: 'unarchive',
      class: ''
  },
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
    this.menuItems = ROUTES;
  }

}
