import { TaigaUserStory } from '../../../project-managers/taiga/models';
import { SimpleUserStory } from '../../../core/models/simple-assignment/simple-user-story';

export function taigaStoryToSimpleUserStory(
    taigaUserStory: TaigaUserStory): SimpleUserStory {
    const simpleUserStory: SimpleUserStory = new SimpleUserStory();
    simpleUserStory.id = taigaUserStory.id;
    simpleUserStory.subject = taigaUserStory.subject;
    return simpleUserStory;

}

export function taigaStoriesToSimpleUserStories(
    taigaUserStories: TaigaUserStory[]): SimpleUserStory[] {
        return taigaUserStories.map(taigaStoryToSimpleUserStory);
    }
