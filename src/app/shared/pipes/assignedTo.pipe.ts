import { Pipe, PipeTransform } from '@angular/core';
import { UserStory } from '../../core/models';

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
