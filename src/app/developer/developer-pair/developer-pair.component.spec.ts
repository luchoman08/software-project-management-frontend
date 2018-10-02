import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperPairComponent } from './developer-pair.component';

describe('DeveloperPairComponent', () => {
  let component: DeveloperPairComponent;
  let fixture: ComponentFixture<DeveloperPairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperPairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
