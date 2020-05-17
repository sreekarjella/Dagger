import { DetailedMovieService } from './../../../shared/services/detailed-movie.service';
import { Movies } from './../../../shared/model/Movies';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.scss'],
})
export class MovieCoverComponent implements OnInit {

  @Input()
  movies: Movies[];

  constructor(
    private router: Router,
    private detailedMovieService: DetailedMovieService,
  ) { }

  ngOnInit() {
  }


  showMovieDetails(movieId: number) {
    this.detailedMovieService.movieId = movieId;
    this.router.navigateByUrl('/detailed-movie');
  }

}
