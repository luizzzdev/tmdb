import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../../shared/Movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {
  
  @Input() movie: Movie;
  poster_path = 'https://image.tmdb.org/t/p/w200';

  constructor() { }
  
  ngOnInit(): void {}

} 
