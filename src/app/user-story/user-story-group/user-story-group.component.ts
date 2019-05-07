import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserStory } from '../../core/models/user-story.model';
import { v4 as uuid } from 'uuid';
import { UserStoryGroup } from '../../core/models';
import { MatDialog } from '@angular/material';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {
  SingleDataDialogEditOrAddComponent
} from '../../page-components/common-components/single-data-dialog-edit-or-add/single-data-dialog-edit-or-add.component';
@Component({
  selector: 'app-user-story-group',
  templateUrl: './user-story-group.component.html',
  styleUrls: ['./user-story-group.component.scss']
})
export class UserStoryGroupComponent implements OnInit{
  @Input() userStories: UserStory[];
  defaultGroupId: String = "";
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
     this.getDefaultGroup().user_stories = this.userStories;
     this.cd.markForCheck();
   }
   getDefaultGroup(): UserStoryGroup {
     return this.groups.find(group => group.id === this.defaultGroupId);
   }
   drop(event: CdkDragDrop<UserStory[]>) {
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
