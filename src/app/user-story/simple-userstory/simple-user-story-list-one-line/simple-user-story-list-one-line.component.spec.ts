import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleUserStoryListOneLineComponent } from './simple-user-story-list-one-line.component';

describe('SimpleUserStoryListOneLineComponent', () => {
  let component: SimpleUserStoryListOneLineComponent;
  let fixture: ComponentFixture<SimpleUserStoryListOneLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleUserStoryListOneLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleUserStoryListOneLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
