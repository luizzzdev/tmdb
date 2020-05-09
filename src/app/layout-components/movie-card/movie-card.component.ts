import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../shared/Movie';
import { Watchable } from 'src/app/shared/Watchable';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Watchable;
  posterPath = 'https://image.tmdb.org/t/p/w500';
  title: string;
  imagePath: string;

  constructor() {}

  ngOnInit(): void {
    this.title = this.movie.title || this.movie.name;
    this.imagePath = this.posterPath + this.movie.poster_path;
  }
}
