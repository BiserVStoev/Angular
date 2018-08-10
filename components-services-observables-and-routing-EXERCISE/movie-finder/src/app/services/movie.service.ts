import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie';
 
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  path: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '4fe33feb4f102b0ccd41742ede6f8c65';
  apiKeyAlt: string = '?api_key=';
  popularEndpoint: string = 'discover/movie?sort_by=popularity.desc';
  authentication: string = '&api_key=';
  theatersEndpoint: string = 'discover/movie?primary_release_date.gte=2018-07-15&primary_release_date.lte=2018-11-22';
  kidsEndpoint: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  dramasEndpoint: string = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';
  searchMovieEndpoint: string = 'search/movie';

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.path}${this.popularEndpoint}${this.authentication}${this.apiKey}`);
  }

  getTheaters(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.path}${this.theatersEndpoint}${this.authentication}${this.apiKey}`);
  }

  getKids(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.path}${this.kidsEndpoint}${this.authentication}${this.apiKey}`);
  }

  getDramas(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.path}${this.dramasEndpoint}${this.authentication}${this.apiKey}`);
  }

  getMovie(id): Observable<Movie> {
    return this.http.get<Movie>(`${this.path}movie/${id}${this.apiKeyAlt}${this.apiKey}`);
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${this.path}${this.searchMovieEndpoint}${this.apiKeyAlt}${this.apiKey}&query=${query}`);
  }
}
