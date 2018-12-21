import { TestBed } from '@angular/core/testing';

import { DiscoverService } from './discover.service';

describe('DiscoverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscoverService = TestBed.get(DiscoverService);
    expect(service).toBeTruthy();
  });
});
