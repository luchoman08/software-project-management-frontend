import { Component, OnInit, Input } from '@angular/core';
import { DeveloperPair } from '../../core/models/developer-pair.model';
import { PAIRS } from '../../mocks/simple-mocks/pairs';
import { Developer } from '../../core/models';

@Component({
  selector: 'app-developer-pair',
  templateUrl: './developer-pair.component.html',
  styleUrls: ['./developer-pair.component.scss']
})
export class DeveloperPairComponent implements OnInit {
  @Input() pairs: Array<DeveloperPair>;
  indexSourceDeveloper: number;
  indexObjectiveDeveloper: number;
  indexSourcePair: number;
  indexObjectivePair: number;
  moving: boolean ;

  constructor() { }
  setIndexSourceDeveloper(index: number, indexPair: number) {
    if (!this.moving) {
      this.setIndexSourcePair(indexPair);
      this.indexSourceDeveloper = index;
    }
    this.moving = true;
  }
  setIndexObjectiveDeveloper(index: number,  indexPair: number) {
    this.setIndexObjectivePair(indexPair);
    this.indexObjectiveDeveloper = index;
  }
  setIndexSourcePair(index: number) {
    if (!this.moving) {
      this.indexSourcePair = index;
    }
  
    this.moving = true;
  }
  setIndexObjectivePair(index: number) {
    this.indexObjectivePair = index;
  }
  swapDevelopers() {
    let sufixObjectiveDeveloper = this.indexObjectiveDeveloper + 1;
    let sufixSourceDeveloper = this.indexSourceDeveloper + 1;
    let sufix = 'developer';
    let sourcePropertyName = sufix +  sufixSourceDeveloper;
    let objectivePropertyName = sufix +  sufixObjectiveDeveloper;
    /* Check if pair have the property names used in this method */
    if( ! ('developer1' in this.pairs[this.indexSourcePair])  &&  ('developer2' in this.pairs[this.indexSourcePair]) ) {
      console.error('Los desarrolladores deben tener las propiedades developer1 y developer2');
      return;
    } 
    let tempDevel = this.pairs[this.indexObjectivePair][objectivePropertyName];
    this.pairs[this.indexObjectivePair][objectivePropertyName] = this.pairs[this.indexSourcePair][sourcePropertyName];
    this.pairs[this.indexSourcePair][sourcePropertyName] = tempDevel;
  }
  onItemDrop(e: any) {
    // Get the dropped data here
    this.swapDevelopers();
    this.moving = false;
  }

  ngOnInit() {
  }

}
