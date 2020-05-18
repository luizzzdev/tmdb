import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../shared/Movie';

@Component({
  selector: 'app-carousel-backdrop-path',
  templateUrl: './carousel-backdrop-path.component.html',
  styleUrls: ['./carousel-backdrop-path.component.sass'],
})
export class CarouselBackdropPathComponent implements OnInit {
  @Input() movies: Array<Movie>;

  ngOnInit(): void {}

}
