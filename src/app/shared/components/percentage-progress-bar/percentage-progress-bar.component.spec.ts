import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageProgressBarComponent } from './percentage-progress-bar.component';

describe('PercentageProgressBarComponent', () => {
  let component: PercentageProgressBarComponent;
  let fixture: ComponentFixture<PercentageProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentageProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
