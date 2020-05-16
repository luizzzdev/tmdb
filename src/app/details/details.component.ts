import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import {SimilarMovies} from '../shared/SimilarMovies'
import {chunk} from 'lodash'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  id: number;
  private sub: any;
  similarMovies: Array<SimilarMovies> = []
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.getRelatedMovies(this.id);
    });
    window.scrollTo(0, 0)
  }

  getRelatedMovies(id) {
    this.moviesService.getSimilarMovies(id).subscribe(resp => this.similarMovies = chunk(resp.results, 4))
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
