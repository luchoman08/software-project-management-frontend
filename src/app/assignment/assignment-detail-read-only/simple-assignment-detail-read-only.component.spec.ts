import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDetailReadOnlyComponent } from './assignment-detail-read-only.component';

describe('AssignmentDetailReadOnlyComponent', () => {
  let component: AssignmentDetailReadOnlyComponent;
  let fixture: ComponentFixture<AssignmentDetailReadOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentDetailReadOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDetailReadOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
