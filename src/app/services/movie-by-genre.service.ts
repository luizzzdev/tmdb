import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {MovieResponse} from '../shared/MovieResponse';
import {Movie} from '../shared/Movie';
import {SimilarMovies} from '../shared/SimilarMovies'
import {MovieDetails} from '../shared/MovieDetailsResponse'
import { Watchable } from '../shared/Watchable';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class MovieByGenreService {

  apikey = "385801b00919de93e960028b6ca5e4cd";
  apiBaseUrl = 'https://api.themoviedb.org/3';

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getMoviesByGenre(genre: number): Observable<MovieResponse<Movie>> {
    return this.httpClient.get<MovieResponse<Movie>>(`${this.apiBaseUrl}/discover/movie?api_key=${this.apikey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${genre}`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getMovieDetalhes(movieId): Observable<MovieDetails>{
    return this.httpClient.get<MovieDetails>(`${this.apiBaseUrl}/movie/${movieId}?api_key=${this.apikey}`)
  }

  getSimilarMovies(movieId): Observable<MovieResponse<SimilarMovies>>{
    return this.httpClient.get<MovieResponse<SimilarMovies>>(`${this.apiBaseUrl}/movie/${movieId}/similar?api_key=${this.apikey}`)
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
