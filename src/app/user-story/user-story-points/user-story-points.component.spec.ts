import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryPointsComponent } from './user-story-points.component';

describe('UserStoryPointsComponent', () => {
  let component: UserStoryPointsComponent;
  let fixture: ComponentFixture<UserStoryPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
