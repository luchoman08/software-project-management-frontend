import { Component, OnInit, Input } from '@angular/core';
import { Developer, UserStory } from '../../core/models';
import { Punctuation } from '../../core/models/punctuation';

@Component({
  selector: 'app-developer-compatibility-with-user-story',
  templateUrl: './developer-compatibility-with-user-story.component.html',
  styleUrls: ['./developer-compatibility-with-user-story.component.scss']
})
export class DeveloperCompatibilityWithUserStoryComponent implements OnInit {
  @Input() developer: Developer;
  @Input() userStory: UserStory;
  punctuationsCompatibility = new  Array<{
    punctuation: Punctuation, 
    compatibility: Number //percentage of compatibility where 100 is fully compatible
  }>();
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
    for (let develPunctuation of this.developer.punctuations) {
      const userStoryPunctuation = this.userStory.punctuations.find(_punctuation => _punctuation.id === develPunctuation.id );
      const compatibility = this.calculateCompatibility ( userStoryPunctuation, develPunctuation);
      this.punctuationsCompatibility.push({punctuation: develPunctuation, compatibility});
    }
  }
  ngOnInit() {
    this.initCompatibilities();
  }

}
