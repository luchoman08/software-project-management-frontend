import { Component } from '@angular/core';
import { UserStory } from '../../core/models/user-story.model';
import { SIMPLEUSERSTORIES } from '../../mocks/simple-mocks/simple-user-stories';
import { UserStoryGroup } from '../../core/models';
@Component({
  selector: 'app-user-story-group',
  templateUrl: './user-story-group.component.html',
  styleUrls: ['./user-story-group.component.scss']
})
export class UserStoryGroupComponent {
  droppedItems = [];
  sourceGroup: UserStoryGroup;
  objectiveGroup: UserStoryGroup;
  userStories: UserStory[] = SIMPLEUSERSTORIES;
  groups: UserStoryGroup[] = new Array<UserStoryGroup>();
  constructor() {
    console.log(this.userStories.length)
    this.groups.push({id: "0", name:"Grupo 1", user_stories:[this.userStories[0], this.userStories[3]] });
    this.groups.push({id: "1", name:"Grupo 2", user_stories:[this.userStories[1], this.userStories[2]] });
    this.groups.push({id: "2", name:"Grupo 3", user_stories:[this.userStories[5], this.userStories[4]] });
   }
   setSourceGroup(group: UserStoryGroup) {
     this.sourceGroup = group;
     console.log( "source group ", this.sourceGroup.name);

   }
   setObjectiveGroup(group: UserStoryGroup) {
     this.objectiveGroup = group;
     console.log("objective group ", this.objectiveGroup.name);

   }
   /*
     onItemDrop(e: any) {
    // Get the dropped data here
    this.groups[0].user_stories.push(e.dragData);
    var index = this.groups[1].user_stories.indexOf(e.dragData);
    if (index > -1) {
      this.groups[1].user_stories.splice(index, 1);
    }
  }
   */
  onItemDrop(e: any) {
    // Get the dropped data here
    console.log("objective group ", this.objectiveGroup.name, "source group ", this.sourceGroup.name);
    this.objectiveGroup.user_stories.push(e.dragData);
    var index = this.sourceGroup.user_stories.indexOf(e.dragData);
    if (index > -1) {
      this.sourceGroup.user_stories.splice(index, 1);
    }
  }
  onItem2Drop(e: any) {
    console.log("source ", this.sourceGroup.name, "objective ", this.objectiveGroup.name);
    console.log("e", e);
    // Get the dropped data here
    this.groups[1].user_stories.push(e.dragData);
    var index = this.groups[0].user_stories.indexOf(e.dragData);
    if (index > -1) {
      this.groups[0].user_stories.splice(index, 1);
    }
  }



}
