import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunctuationsSelectorComponent } from './punctuations-selector.component';

describe('PunctuationsSelectorComponent', () => {
  let component: PunctuationsSelectorComponent;
  let fixture: ComponentFixture<PunctuationsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunctuationsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunctuationsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
