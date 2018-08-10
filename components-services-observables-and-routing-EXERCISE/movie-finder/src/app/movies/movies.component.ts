import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../services/movie.service';

import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Movie[];
  theaters: Movie[];
  kids: Movie[];
  dramas: Movie[];
  searchResult: any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data;
      });

    this.moviesService
      .getTheaters()
      .subscribe(data => {
        this.theaters = data;
      });

    this.moviesService
      .getKids()
      .subscribe(data => {
        this.kids = data;
      });

    this.moviesService
      .getDramas()
      .subscribe(data => {
        this.dramas = data;
      });
  }

  search(input): void {
    const query = input.query;

    this.moviesService
      .searchMovies(query)
      .subscribe(data => {
        if(data.any.length !== 0) {
          this.searchResult = data;
        } else {
          this.searchResult = null;
        }
      });
  }

}
