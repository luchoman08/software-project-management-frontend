import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperSelectPairDialogComponent } from './developer-select-pair-dialog.component';

describe('DeveloperSelectPairDialogComponent', () => {
  let component: DeveloperSelectPairDialogComponent;
  let fixture: ComponentFixture<DeveloperSelectPairDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperSelectPairDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperSelectPairDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
