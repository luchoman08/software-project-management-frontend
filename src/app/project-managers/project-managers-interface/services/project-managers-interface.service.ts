import { Injectable } from '@angular/core';
import { ProjectManagersEnum } from '../enums'
@Injectable()
export class ProjectManagersInterfaceService {
    chosenProjectManager: ProjectManagersEnum = ProjectManagersEnum.TAIGA;
    constructor () {}
  }
