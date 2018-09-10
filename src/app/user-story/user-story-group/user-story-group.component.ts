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
  userStories: UserStory[] = SIMPLEUSERSTORIES;
  groups: UserStoryGroup[];
  constructor() {
    console.log(this.userStories.length)
    this.groups.push({id: "0", name:"Grupo 1", user_stories:[this.userStories[0]] });
   }
  items = [
    { name: "Apple", type: "fruit" },
    { name: "Carrot", type: "vegetable" },
    { name: "Orange", type: "fruit" }];

  onItemDrop(e: any) {
    // Get the dropped data here
    this.droppedItems.push(e.dragData);
    var index = this.items.indexOf(e.dragData);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
  onItem2Drop(e: any) {
    console.log("e", e);
    // Get the dropped data here
    this.items.push(e.dragData);
    var index = this.droppedItems.indexOf(e.dragData);
    if (index > -1) {
      this.droppedItems.splice(index, 1);
    }
  }



}
