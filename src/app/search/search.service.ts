import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {

  }

  search(query: string) {
    const params = {
      api_key: '7378f2aee1d04b6f69ef4bda674b4a91',
      query
    }

    const url = 'https://api.themoviedb.org/3/search/multi'
    return this.http.get(url, { params })
  }
}
