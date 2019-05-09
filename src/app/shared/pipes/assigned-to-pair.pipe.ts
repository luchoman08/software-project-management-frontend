import { Pipe, PipeTransform } from '@angular/core';
import { DeveloperPair, UserStory } from '../../core/models';


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
