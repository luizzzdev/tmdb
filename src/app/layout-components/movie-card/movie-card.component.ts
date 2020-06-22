import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../shared/Movie';
import { Watchable } from 'src/app/shared/Watchable';
import { MoviesService } from '../../services/movies.service';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

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

  faHeartSolid = faHeartSolid;
  faHeart = faHeart;


  get isFavorite() {
    return this.moviesService.isFavorite(this.movie);
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.title = this.movie.title || this.movie.name;
    this.imagePath = this.posterPath + this.movie.poster_path;
  }

  addToFavorites() {
    this.moviesService.addToFavorites(this.movie);
  }
}
