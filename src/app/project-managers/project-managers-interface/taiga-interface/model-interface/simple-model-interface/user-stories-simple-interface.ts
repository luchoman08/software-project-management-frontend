import { TaigaUserStory } from '../../../../../project-managers/taiga/models';
import { UserStory } from '../../../../../core/models/';

export function taigaStoryToSimpleUserStory(
    taigaUserStory: TaigaUserStory): UserStory {
    const simpleUserStory: UserStory = new UserStory();
    simpleUserStory.id = taigaUserStory.id;
    simpleUserStory.subject = taigaUserStory.subject;
    return simpleUserStory;

}

export function taigaStoriesToSimpleUserStories(
    taigaUserStories: TaigaUserStory[]): UserStory[] {
        return taigaUserStories.map(taigaStoryToSimpleUserStory);
    }
