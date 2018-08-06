import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperPunctuationsComponent } from './developer-punctuations.component';

describe('DeveloperPunctuationsComponent', () => {
  let component: DeveloperPunctuationsComponent;
  let fixture: ComponentFixture<DeveloperPunctuationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperPunctuationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperPunctuationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
