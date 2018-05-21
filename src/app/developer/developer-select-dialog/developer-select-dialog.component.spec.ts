import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperSelectDialogComponent } from './developer-select-dialog.component';

describe('DeveloperSelectDialogComponent', () => {
  let component: DeveloperSelectDialogComponent;
  let fixture: ComponentFixture<DeveloperSelectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperSelectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
