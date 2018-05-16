import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDeveloperListOneLineComponent } from './simple-developer-list-one-line.component';

describe('SimpleDeveloperListOneLineComponent', () => {
  let component: SimpleDeveloperListOneLineComponent;
  let fixture: ComponentFixture<SimpleDeveloperListOneLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDeveloperListOneLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDeveloperListOneLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
