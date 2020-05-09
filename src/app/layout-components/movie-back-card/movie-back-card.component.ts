import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../shared/Movie';
import { Watchable } from 'src/app/shared/Watchable';

@Component({
  selector: 'app-movie-back-card',
  templateUrl: './movie-back-card.component.html',
  styleUrls: ['./movie-back-card.component.sass']
})
export class MovieBackCardComponent implements OnInit {
  @Input() movie: Watchable;
  posterPath = 'https://image.tmdb.org/t/p/w500';
  title: string;
  imageBackdropPath: string;

  constructor() {}

  ngOnInit(): void {
    this.title = this.movie.title || this.movie.name;
    this.imageBackdropPath = this.posterPath + this.movie.backdrop_path;
  }
}
