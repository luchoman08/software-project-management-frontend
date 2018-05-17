import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleUserHistoryDetailComponent } from './simple-userstorie-detail.component';

describe('SimpleUserHistoryDetailComponent', () => {
  let component: SimpleUserHistoryDetailComponent;
  let fixture: ComponentFixture<SimpleUserHistoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleUserHistoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleUserHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
