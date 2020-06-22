import { Genre } from './../shared/MovieDetailsResponse';
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
export class GenreService {

  apikey = "385801b00919de93e960028b6ca5e4cd";
  apiBaseUrl = 'https://api.themoviedb.org/3';

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getGenres(): Observable<{genres: Array<Genre>}> {
    return this.httpClient.get<{genres: Array<Genre>}>(`${this.apiBaseUrl}/genre/movie/list?api_key=${this.apikey}&language=en-US`);
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
  }

}
