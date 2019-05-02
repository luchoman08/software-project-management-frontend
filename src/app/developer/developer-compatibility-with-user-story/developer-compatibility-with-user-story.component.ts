import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Developer, UserStory } from '../../core/models';
import { Punctuation } from '../../core/models/punctuation';
import { SIMPLEDEVELS } from '../../mocks';
import { SIMPLEUSERSTORIES } from '../../mocks/simple-mocks/simple-user-stories';

class PunctuationCompatibility {
    punctuation: Punctuation;
    disabled: boolean;
    compatibility: Number; // percentage of compatibility where 100 is fully compatible
}

@Component({
  selector: 'app-developer-compatibility-with-user-story',
  templateUrl: './developer-compatibility-with-user-story.component.html',
  styleUrls: ['./developer-compatibility-with-user-story.component.scss']
})
export class DeveloperCompatibilityWithUserStoryComponent implements OnInit {
  @Input() developer: Developer ;
  @Input() userStory: UserStory;
  punctuationsCompatibility = new  Array<PunctuationCompatibility>();
  constructor() {

  }
  private calculateCompatibility(userStoryPunctuation: Punctuation, developerPunctuation: Punctuation): Number {
    const compatibility =  developerPunctuation.value * 100 / userStoryPunctuation.value ;
    if ( compatibility > 100 ) {
      return 100;
    } else {
      return compatibility;
    }
  }
  private initCompatibilities(): void {
    for (const develPunctuation of this.developer.punctuations) {
      const userStoryPunctuation = this.userStory.punctuations.find(_punctuation => _punctuation.id === develPunctuation.id );
      const compatibility = this.calculateCompatibility ( userStoryPunctuation, develPunctuation);
      this.punctuationsCompatibility
      .push({
        disabled: userStoryPunctuation.value ? true : false,
        punctuation: develPunctuation, compatibility
      });
    }
  }
  ngOnInit() {
    this.initCompatibilities();
  }

}
