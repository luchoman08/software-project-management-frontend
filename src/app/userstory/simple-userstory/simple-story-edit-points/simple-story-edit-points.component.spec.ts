import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleStoryEditPointsComponent } from './simple-story-edit-points.component';

describe('SimpleStoryEditPointsComponent', () => {
  let component: SimpleStoryEditPointsComponent;
  let fixture: ComponentFixture<SimpleStoryEditPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleStoryEditPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleStoryEditPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
