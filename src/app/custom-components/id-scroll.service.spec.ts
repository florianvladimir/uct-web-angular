import { TestBed } from '@angular/core/testing';

import { IdScrollService } from './id-scroll.service';

describe('IdScrollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdScrollService = TestBed.get(IdScrollService);
    expect(service).toBeTruthy();
  });
});
