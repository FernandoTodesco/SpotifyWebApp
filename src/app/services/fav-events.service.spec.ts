import { TestBed } from '@angular/core/testing';

import { FavEventsService } from './fav-events.service';

describe('FavEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavEventsService = TestBed.get(FavEventsService);
    expect(service).toBeTruthy();
  });
});
