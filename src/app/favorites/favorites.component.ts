import { Component, OnInit } from '@angular/core';
import { Watchable } from '../shared/Watchable';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass'],
})
export class FavoritesComponent implements OnInit {
  movies: Array<Watchable> = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getFavoriteMovies();
  }
}
