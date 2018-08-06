import { Pipe, PipeTransform } from '@angular/core';
import { UserStory } from '../models/user-story.model';
import { Developer } from '../models/developer.model';

@Pipe({
  name: 'assignedTo',
  pure: false
})
export class AssignedToPipe implements PipeTransform {

  transform(userStories: UserStory[], idDeveloper: string): any {
    return userStories.filter((userStory: UserStory) => {
        return userStory.assigned_to === String(idDeveloper);
    })
  }

}
