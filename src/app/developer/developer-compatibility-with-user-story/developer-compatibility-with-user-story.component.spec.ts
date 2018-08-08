import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperCompatibilityWithUserStoryComponent } from './developer-compatibility-with-user-story.component';

describe('DeveloperCompatibilityWithUserStoryComponent', () => {
  let component: DeveloperCompatibilityWithUserStoryComponent;
  let fixture: ComponentFixture<DeveloperCompatibilityWithUserStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperCompatibilityWithUserStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperCompatibilityWithUserStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
