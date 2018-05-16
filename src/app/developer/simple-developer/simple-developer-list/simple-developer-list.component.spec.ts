import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDeveloperListComponent } from './simple-developer-list.component';

describe('SimpleDeveloperListComponent', () => {
  let component: SimpleDeveloperListComponent;
  let fixture: ComponentFixture<SimpleDeveloperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDeveloperListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDeveloperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
