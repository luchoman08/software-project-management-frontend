import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { UserStory } from '../../core/models/user-story.model';
import { UserStoryGroup } from '../../core/models';

import {
  SingleDataDialogEditOrAddComponent
} from '../../shared/components';

@Component({
  selector: 'app-user-story-group',
  templateUrl: './user-story-group.component.html',
  styleUrls: ['./user-story-group.component.scss']
})
export class UserStoryGroupComponent implements OnInit {
  @Input() userStories: UserStory[];
  defaultGroupId: String = '';
  groups: Array<UserStoryGroup> = new Array<UserStoryGroup>();

  constructor(
    public dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) {
    this.addDefaultGroup();
   }
   private addDefaultGroup() {
     const defaultGroup = UserStoryGroup.make({name: 'Historias sin agrupar'});
     this.defaultGroupId = defaultGroup.id;
     this.groups.push(defaultGroup);
   }
   ngOnInit() {
     this.getDefaultGroup().user_stories = JSON.parse(JSON.stringify(this.userStories));
     this.cd.markForCheck();
   }
   getGroups() {
     return this.groups.filter(group => group.id !== this.defaultGroupId);
   }
   private getDefaultGroup(): UserStoryGroup {
     return this.groups.find(group => group.id === this.defaultGroupId);
   }
   private drop(event: CdkDragDrop<UserStory[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  openAddGroup() {
    const dialogRef = this.dialog.open(SingleDataDialogEditOrAddComponent, {
      width: '320px',
      data:  {
        value: null,
        valueName: 'grupo',
        placeholder: 'Nombre de el grupo',
        type: 'text'}
    });

    dialogRef.afterClosed().subscribe(value => {
      if (value && value !== '') {
        this.groups.push(UserStoryGroup.make({name: value}));
      }
    });
 }
}
