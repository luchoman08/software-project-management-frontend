import { Injectable } from '@angular/core';
import { EnumProjectManagers } from './project-managers-enum'
@Injectable()
export class ProjectManagersInterfaceService {
    chosenProjectManager: EnumProjectManagers = EnumProjectManagers.TAIGA;
    constructor () {}
  }
