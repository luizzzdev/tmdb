import { Movie } from './../shared/Movie';
import { MovieByGenreService } from './../services/movie-by-genre.service';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MoviesService,
              private movieByGenreService: MovieByGenreService) {}

  movie = {} as Movie;
  movies: Movie[];
  moviesByGenre: Movie[];
  selectedGenre = 27;

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies().subscribe((resp) => {
      // this.movies = [resp.results[0]];
      this.movies = resp.results;
    });
  }

  getSelectedGenre() {
    this.selectedGenre = 27;
  }

  getMoviesByGenre(selectedGenre){
      this.movieByGenreService.getMoviesByGenre(selectedGenre).subscribe((resp) => {
        this.moviesByGenre = resp.results;
      })
  }

  homeTitle = 'Filmes em destaque';
  backdrop_path =
    'https://image.tmdb.org/t/p/original/5BwqwxMEjeFtdknRV792Svo0K1v.jpg';
  poster_path = 'https://image.tmdb.org/t/p/w200';
  genre_poster =
    'https://image.tmdb.org/t/p/original/xHCfWGlxwbtMeeOnTvxUCZRGnkk.jpg';
}
