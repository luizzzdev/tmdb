import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {
  
  @Input() movie: object;
  poster_path = 'https://image.tmdb.org/t/p/w200';

  constructor() { }
  
  ngOnInit(): void {
    console.log(this.movie)
  }

} 
