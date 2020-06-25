import { Movie } from '../../shared/Movie';
import { MovieByGenreService } from '../../services/movie-by-genre.service';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.sass']
})
export class MoviesByGenreComponent implements OnInit {
  constructor(private moviesService: MoviesService,
              private movieByGenreService: MovieByGenreService) {}

movie = {} as Movie;
movies: Movie[];
moviesByGenre: Movie[];
genrePoster = 'https://image.tmdb.org/t/p/original/xHCfWGlxwbtMeeOnTvxUCZRGnkk.jpg';
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
}
