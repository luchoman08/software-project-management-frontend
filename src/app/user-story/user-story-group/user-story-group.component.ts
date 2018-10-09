import { Component } from '@angular/core';
import { UserStory } from '../../core/models/user-story.model';
import { SIMPLEUSERSTORIES } from '../../mocks/simple-mocks/simple-user-stories';
import { UserStoryGroup } from '../../core/models';
import { MatDialog } from '@angular/material';
import { SingleDataDialogEditOrAddComponent } from '../../page-components/common-components';
@Component({
  selector: 'app-user-story-group',
  templateUrl: './user-story-group.component.html',
  styleUrls: ['./user-story-group.component.scss']
})
export class UserStoryGroupComponent {
  droppedItems = [];
  sourceGroup: UserStoryGroup;
  moving: boolean; // if is moving a user story at this moment
  objectiveGroup: UserStoryGroup;
  userStories: UserStory[] = SIMPLEUSERSTORIES;
  groups: UserStoryGroup[] = new Array<UserStoryGroup>();
  constructor(
    public dialog: MatDialog
  ) {
    console.log(this.userStories.length)
    this.groups.push({id: "-1", name:"Historias sin agrupar", user_stories:[this.userStories[0], this.userStories[3]] });
    this.groups.push({id: "0", name:"Grupo 1", user_stories:[this.userStories[0], this.userStories[3]] });
    this.groups.push({id: "1", name:"Grupo 2", user_stories:[this.userStories[1], this.userStories[2]] });
    this.groups.push({id: "2", name:"Grupo 3", user_stories:[this.userStories[5], this.userStories[4]] });
   }
   setSourceGroup(group: UserStoryGroup) {
     if (!this.moving) {
       this.sourceGroup = group;
     }
     this.moving = true;
   }
   setObjectiveGroup(group: UserStoryGroup) {
     this.objectiveGroup = group;
   }
   openAddGroup() {
      console.log("click")
      const dialogRef = this.dialog.open(SingleDataDialogEditOrAddComponent, {
        width: '320px',
        data:  {
          value: null,
          valueName: 'grupo',
          placeholder: 'Nombre de el grupo',
          type: 'text'}
      });
  
      dialogRef.afterClosed().subscribe(value => {
        if(value && value != '') {
          this.groups.push(UserStoryGroup.make({name: value}));
        }
      });
   }
  onItemDrop(e: any) {
    // Get the dropped data here
    this.objectiveGroup.user_stories.push(e.dragData);
    var index = this.sourceGroup.user_stories.indexOf(e.dragData);
    if (index > -1) {
      this.sourceGroup.user_stories.splice(index, 1);
    }
    this.moving = false;
  }
  onItem2Drop(e: any) {
    // Get the dropped data here
    this.groups[1].user_stories.push(e.dragData);
    var index = this.groups[0].user_stories.indexOf(e.dragData);
    if (index > -1) {
      this.groups[0].user_stories.splice(index, 1);
    }
  }



}
