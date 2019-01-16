import { TestBed } from '@angular/core/testing';

import { ReloadHomeService } from './reload-home.service';

describe('ReloadHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReloadHomeService = TestBed.get(ReloadHomeService);
    expect(service).toBeTruthy();
  });
});
