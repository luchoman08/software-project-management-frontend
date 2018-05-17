import { Injectable } from '@angular/core';
import { StoryAssignmentMiroservicesEnum } from '../enums'
@Injectable()
export class AssignmentMiroservicesInterfaceService {
    choosenAssignmentMicroservicee: StoryAssignmentMiroservicesEnum = StoryAssignmentMiroservicesEnum.SIMPLE_SISTEM_ASSIGNMENT;
    constructor () {}
  }
