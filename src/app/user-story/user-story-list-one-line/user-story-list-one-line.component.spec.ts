import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryListOneLineComponent } from './user-story-list-one-line.component';

describe('UserStoryListOneLineComponent', () => {
  let component: UserStoryListOneLineComponent;
  let fixture: ComponentFixture<UserStoryListOneLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryListOneLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryListOneLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
