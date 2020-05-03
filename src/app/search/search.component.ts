import { Component, OnInit } from '@angular/core';
import {SearchService} from './search.service';
import {FormBuilder} from '@angular/forms';
import {Response} from '../shared/Tmdb';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  searchForm;
  movies: Array<Movie> = [];

  constructor(private searchService: SearchService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: 'star wars'
    });
  }

  ngOnInit(): void {
  }

  search(formData) {
    this.searchService.search(formData.search).subscribe((response: Response<Movie>) => {
      this.movies = response.results.map(
        (movie: Movie) => ({ ...movie, poster_path: 'http://image.tmdb.org/t/p/w500/' + movie.poster_path})
      );
    });
  }
}
