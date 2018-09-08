import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryGroupsComponent } from './user-story-groups.component';

describe('UserStoryGroupsComponent', () => {
  let component: UserStoryGroupsComponent;
  let fixture: ComponentFixture<UserStoryGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
