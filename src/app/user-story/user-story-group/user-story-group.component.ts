import { Component, Input } from '@angular/core';
import { UserStory } from '../../core/models/user-story.model';
import { v4 as uuid } from 'uuid';
import { UserStoryGroup } from '../../core/models';
import { MatDialog } from '@angular/material';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { SingleDataDialogEditOrAddComponent } from 'app/page-components/common-components';
@Component({
  selector: 'app-user-story-group',
  templateUrl: './user-story-group.component.html',
  styleUrls: ['./user-story-group.component.scss']
})
export class UserStoryGroupComponent {
  @Input() userStories: UserStory[];
  groups: Array<UserStoryGroup> = new Array<UserStoryGroup>();
  constructor(
    public dialog: MatDialog
  ) {
    this.addDefaultGroup();
   }
   private addDefaultGroup() {
    this.groups.push({id: uuid(), name: 'Historias sin agrupar', user_stories: new Array<UserStory>()});
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
