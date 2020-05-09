import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {Movie} from '../../shared/Movie';

@Component({
  selector: 'app-carousel-backdrop-path',
  templateUrl: './carousel-backdrop-path.component.html',
  styleUrls: ['./carousel-backdrop-path.component.sass']
})
export class CarouselBackdropPathComponent implements OnInit {

  constructor(private moviesService: MoviesService) {}

  movie = {} as Movie;
  movies: Movie[];

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies().subscribe(resp => this.movies = (resp.results));
  }

  pic1='https://image.tmdb.org/t/p/original/5BwqwxMEjeFtdknRV792Svo0K1v.jpg';
  pic2='https://image.tmdb.org/t/p/original/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg';
  pic3='https://image.tmdb.org/t/p/original/9sXHqZTet3Zg5tgcc0hCDo8Tn35.jpg';
  backdrop_path = 'https://image.tmdb.org/t/p/original/5BwqwxMEjeFtdknRV792Svo0K1v.jpg';
  moviePic = 'https://image.tmdb.org/t/p/original/5BwqwxMEjeFtdknRV792Svo0K1v.jpg';
}
