import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDetailPairComponent } from './assignment-detail-pair.component';

describe('AssignmentDetailPairComponent', () => {
  let component: AssignmentDetailPairComponent;
  let fixture: ComponentFixture<AssignmentDetailPairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentDetailPairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDetailPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
