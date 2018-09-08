import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryGroupComponent } from './user-story-group.component';

describe('UserStoryGroupComponent', () => {
  let component: UserStoryGroupComponent;
  let fixture: ComponentFixture<UserStoryGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
