import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {MovieResponse} from '../shared/MovieResponse';
import {Movie} from '../shared/Movie';
import { Watchable } from '../shared/Watchable';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apikey = "385801b00919de93e960028b6ca5e4cd"
  apiBaseUrl = 'https://api.themoviedb.org/3';

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getMovies(): Observable<MovieResponse<Movie>> {
    return this.httpClient.get<MovieResponse<Movie>>(`${this.apiBaseUrl}/discover/movie?api_key=${this.apikey}`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

  addToFavorites(movie: Watchable) {
    const state = this.storageService.get('state')  || {}
    let movies = state.movies || []

    const jaEhFavorito = this.isFavorite(movie)
    if(jaEhFavorito) {
      movies = movies.filter(m => m.id !== movie.id)
    } else {
      movies.push(movie);
    }
    state.movies = movies
    this.storageService.set('state', state)
    return jaEhFavorito
  }

  getFavoriteMovies() {
    const state = this.storageService.get('state') || {}
    const movies = state.movies || []
    return movies as Array<Watchable>
  }

  isFavorite(movie: Watchable) {
    const state = this.storageService.get('state')  || {}
    const movies = state.movies || []
    return movies.some(m => m.id === movie.id)
  }
}
