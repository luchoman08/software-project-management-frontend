import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaSimpleComponent } from './historia-simple.component';

describe('HistoriaSimpleComponent', () => {
  let component: HistoriaSimpleComponent;
  let fixture: ComponentFixture<HistoriaSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
