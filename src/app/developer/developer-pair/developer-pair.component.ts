import { Component, OnInit } from '@angular/core';
import { DeveloperPair } from '../../core/models/developer-pair.model';
import { PAIRS } from '../../mocks/simple-mocks/pairs';
import { Developer } from '../../core/models';

@Component({
  selector: 'app-developer-pair',
  templateUrl: './developer-pair.component.html',
  styleUrls: ['./developer-pair.component.scss']
})
export class DeveloperPairComponent implements OnInit {
  pairs: Array<DeveloperPair> = PAIRS;
  sourceDeveloper: Developer;
  objeciveDeveloper: Developer;
  moving: boolean ;

  constructor() { }
  setSourceDeveloper(developer: Developer) {
    if (!this.moving) {
      
      this.sourceDeveloper = developer;
    }
    this.moving = true;
  }
  setObjectiveDeveloper(developer: Developer) {
    this.objeciveDeveloper = developer;
  }

  onItemDrop(e: any) {
    // Get the dropped data here
    let droped_developer: Developer = e.dragData;
    console.log(this.objeciveDeveloper);
    this.pairs[0].developer1 = droped_developer;

    this.moving = false;
  }

  ngOnInit() {
  }

}
