import { Pipe, PipeTransform } from '@angular/core';
import { DeveloperPair } from '../models/developer-pair.model';
import { UserStory } from '../models';

@Pipe({
  name: 'assignedToPair',
  pure: false
})
export class AssignedToPairPipe implements PipeTransform {

  transform(userStories: UserStory[], pair: DeveloperPair): any {
    return userStories.filter((userStory: UserStory) => {
      return userStory.assigned_to === String(pair.developer1.id) || 
      userStory.assigned_to === String(pair.developer2.id);
  })
  }

}
