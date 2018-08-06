import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDataDialogEditOrAddComponent } from './single-data-dialog-edit-or-add.component';

describe('SingleDataDialogEditOrAddComponent', () => {
  let component: SingleDataDialogEditOrAddComponent;
  let fixture: ComponentFixture<SingleDataDialogEditOrAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDataDialogEditOrAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDataDialogEditOrAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
