import { Injectable } from '@angular/core';
import { ProjectManagersEnum } from '../enums'
@Injectable()
export class ProjectManagersService {
    chosenProjectManager: ProjectManagersEnum = ProjectManagersEnum.TAIGA;
    constructor () {}
  }
