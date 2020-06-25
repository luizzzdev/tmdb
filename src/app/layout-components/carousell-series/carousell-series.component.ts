import { MoviesService } from './../../services/movies.service';
import { Component, Input, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Movie } from '../../shared/Movie';

@Component({
  selector: 'app-carousell-series',
  templateUrl: './carousell-series.component.html',
  styleUrls: ['./carousell-series.component.sass']
})
export class CarousellSeriesComponent implements OnInit {

  constructor(private serieService: SeriesService) { }

  movie = {} as Movie;
  movies: Movie[];

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {
    this.serieService.getSeries().subscribe((resp) => {
      this.movies = resp.results.filter(movie => !!movie.poster_path);
    });
  }
}
