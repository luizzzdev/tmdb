import { GenreService } from './../services/genre.service';
import { Movie } from './../shared/Movie';
import { MovieByGenreService } from './../services/movie-by-genre.service';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Genre } from '../shared/Genre';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MoviesService,
              private movieByGenreService: MovieByGenreService,
              private genreService: GenreService) {}

  movie = {} as Movie;
  movies: Movie[];
  moviesByGenre: Movie[];
  selectedGenre = 0;
  genres: Genre[] = [];
  homeTitle = 'Filmes em destaque';

  ngOnInit() {
    this.getMovies();
    this.genreService.getGenres().subscribe((resp) => {
      this.genres = resp.genres;
    });
  }

  setSelectedGenre(genreId ){
      this.selectedGenre = genreId;
      this.getMoviesByGenre(this.selectedGenre);
  }

  getMovies() {
    this.moviesService.getMovies().subscribe((resp) => {
      // this.movies = [resp.results[0]];
      this.movies = resp.results.filter(movie => !!movie.backdrop_path);
    });
  }

  getSelectedGenre() {
    this.selectedGenre = 27;
  }

  getMoviesByGenre(selectedGenre){
      this.movieByGenreService.getMoviesByGenre(selectedGenre).subscribe((resp) => {
        this.moviesByGenre = resp.results.filter(movie => !!movie.poster_path);
      });
  }
}
