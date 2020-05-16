import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  movie = {} as Movie;
  movies: Movie[];

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies().subscribe((resp) => {
      // this.movies = [resp.results[0]];
      this.movies = resp.results;
    });
  }

  homeTitle = 'Filmes em destaque';
  backdrop_path =
    'https://image.tmdb.org/t/p/original/5BwqwxMEjeFtdknRV792Svo0K1v.jpg';
  poster_path = 'https://image.tmdb.org/t/p/w200';
  genre_poster =
    'https://image.tmdb.org/t/p/original/xHCfWGlxwbtMeeOnTvxUCZRGnkk.jpg';
}
