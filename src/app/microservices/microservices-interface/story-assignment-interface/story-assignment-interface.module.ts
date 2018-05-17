import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SimpleAssignmentService
} from '../../microservices-interface/story-assignment-interface/services';

import {
  AsignacionSimpleInterfaceService
} from '../../microservices-interface/story-assignment-interface/story-assignment-ssa-interface/services-interface/';

import {
  SSAAsignacionSimpleService
} from '../../story-assignment/story-assignment-ssa/services';

/*
  Conection module for Simple Story Assingment microservice provided by luchoman08
*/
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AsignacionSimpleInterfaceService,
    SimpleAssignmentService,
    SSAAsignacionSimpleService

  ]
})
export class StoryAssignmentInterfaceModule { }


