import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairAssignmentComponent } from './pair-assignment.component';

describe('PairAssignmentComponent', () => {
  let component: PairAssignmentComponent;
  let fixture: ComponentFixture<PairAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
