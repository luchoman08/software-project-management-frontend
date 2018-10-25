import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentBuildPairsComponent } from './assignment-build-pairs.component';

describe('AssignmentBuildPairsComponent', () => {
  let component: AssignmentBuildPairsComponent;
  let fixture: ComponentFixture<AssignmentBuildPairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentBuildPairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentBuildPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
