import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import {SimilarMovies} from '../shared/SimilarMovies'
import {chunk} from 'lodash'
import {Router} from "@angular/router"
import {MovieDetails} from '../shared/MovieDetailsResponse'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  id: number;
  currentMovie: MovieDetails
  posterPath = 'https://image.tmdb.org/t/p/w500';
  private sub: any;
  similarMovies: Array<SimilarMovies> = []
  constructor(private router: Router, private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getMovieDetalhes(this.id) 
      this.getRelatedMovies(this.id);
    });
    window.scrollTo(0, 0)
  }

  getMovieDetalhes(id){
    this.moviesService.getMovieDetalhes(id).subscribe(resp => {
      this.currentMovie = resp
      console.log(resp)
    })
  }

  getRelatedMovies(id) {
    this.moviesService.getSimilarMovies(id).subscribe(resp => 
      this.similarMovies = chunk(resp.results, 4)
    )
  }

  reSendToDetails(id) {
    this.router.navigate([`/details/${id}`])
    window.scrollTo(0, 0)
  }

  getUrl(path){
    return `url(${this.posterPath}${path})`
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
