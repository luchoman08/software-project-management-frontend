import { Pipe, PipeTransform } from '@angular/core';
import { DeveloperPair } from '../models/developer-pair.model';
import { UserStory } from '../models';

@Pipe({
  name: 'assignedToPair',
  pure: false
})
export class AssignedToPairPipe implements PipeTransform {

  transform(userStories: UserStory[], pair: DeveloperPair): UserStory[] {
    return userStories.filter((userStory: UserStory) => 
      userStory.assignedTo(pair.developer1) || userStory.assignedTo(pair.developer2)
  )
  }

}
