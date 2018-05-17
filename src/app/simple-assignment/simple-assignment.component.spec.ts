import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAssignmentComponent } from './simple-assignment.component';

describe('SimpleAssignmentComponent', () => {
  let component: SimpleAssignmentComponent;
  let fixture: ComponentFixture<SimpleAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
