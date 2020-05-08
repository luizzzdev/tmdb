import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Movie} from '../shared/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apikey = "385801b00919de93e960028b6ca5e4cd"
  apiBaseUrl = 'https://api.themoviedb.org/3';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.apiBaseUrl}/discover/movie?api_key=${this.apikey}`)
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

}