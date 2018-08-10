import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movie.service';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  movie;
  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.movieService.getMovie(id).subscribe(selectedMovie => {
        this.movie = selectedMovie;
      });
    });
  }

}
