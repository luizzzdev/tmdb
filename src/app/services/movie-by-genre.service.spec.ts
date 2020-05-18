import { TestBed } from '@angular/core/testing';

import { MovieByGenreService } from './movie-by-genre.service';

describe('MovieByGenreService', () => {
  let service: MovieByGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieByGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
