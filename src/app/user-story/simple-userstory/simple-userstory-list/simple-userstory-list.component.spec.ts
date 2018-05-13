import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleUserstoryListComponent } from './simple-userstory-list.component';

describe('SimpleUserstoryListComponent', () => {
  let component: SimpleUserstoryListComponent;
  let fixture: ComponentFixture<SimpleUserstoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleUserstoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleUserstoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
