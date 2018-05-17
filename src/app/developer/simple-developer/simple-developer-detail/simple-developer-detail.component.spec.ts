import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDeveloperDetailComponent } from './simple-developer-detail.component';

describe('SimpleDeveloperDetailComponent', () => {
  let component: SimpleDeveloperDetailComponent;
  let fixture: ComponentFixture<SimpleDeveloperDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDeveloperDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDeveloperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
