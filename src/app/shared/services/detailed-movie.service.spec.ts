import { TestBed } from '@angular/core/testing';

import { DetailedMovieService } from './detailed-movie.service';

describe('DetailedMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailedMovieService = TestBed.get(DetailedMovieService);
    expect(service).toBeTruthy();
  });
});
