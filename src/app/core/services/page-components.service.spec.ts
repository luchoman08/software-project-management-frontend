import { TestBed, inject } from '@angular/core/testing';

import { PageComponentsService } from './page-components.service';

describe('PageComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageComponentsService]
    });
  });

  it('should be created', inject([PageComponentsService], (service: PageComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
