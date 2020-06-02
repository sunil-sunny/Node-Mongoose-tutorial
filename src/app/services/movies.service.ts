import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(movie: String) {
    return this.http.get("https://api-tutorial4.herokuapp.com/movies?title_like=" + movie);
  }
}
