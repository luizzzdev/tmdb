import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  homeTitle = 'Filmes em destaque';
  backdrop_path = 'https://image.tmdb.org/t/p/original/5BwqwxMEjeFtdknRV792Svo0K1v.jpg';
  poster_path = 'https://image.tmdb.org/t/p/w200/jQNOzoiaIQWxJAx8OUighnvnhRA.jpg';
  genre_poster = 'https://image.tmdb.org/t/p/original/xHCfWGlxwbtMeeOnTvxUCZRGnkk.jpg'
  
  
  ngOnInit(): void {
  }
}
