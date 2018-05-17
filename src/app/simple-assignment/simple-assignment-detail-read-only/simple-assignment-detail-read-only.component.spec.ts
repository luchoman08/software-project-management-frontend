import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAssignmentDetailReadOnlyComponent } from './simple-assignment-detail-read-only.component';

describe('SimpleAssignmentDetailReadOnlyComponent', () => {
  let component: SimpleAssignmentDetailReadOnlyComponent;
  let fixture: ComponentFixture<SimpleAssignmentDetailReadOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAssignmentDetailReadOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAssignmentDetailReadOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
