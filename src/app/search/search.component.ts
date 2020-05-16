import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { FormBuilder } from '@angular/forms';
import { Response } from '../shared/Tmdb';
import { Movie } from '../shared/Movie';
import { Watchable } from '../shared/Watchable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  searchForm;
  movies: Array<Watchable> = [];
  totalPages: number;
  page = 1;

  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }

  ngOnInit(): void {}

  search(formData) {
    this.page = 1;
    this.searchService
      .search(formData.search, this.page.toString())
      .subscribe((response: Response<Movie>) => {
        this.movies = this.filterMovies(response.results);
        this.totalPages = response.total_pages;
      });
  }

  searchMore() {
    this.page += 1;
    this.searchService
      .search(this.searchForm.value.search, this.page.toString())
      .subscribe((response: Response<Watchable>) => {
        this.movies = this.movies.concat(this.filterMovies(response.results));
        this.totalPages = response.total_pages;
      });
  }

  filterMovies(movies: Array<Watchable>) {
    return movies.filter((movie: Watchable) => !!movie.poster_path);
  }
}
