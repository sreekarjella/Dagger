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
    private router: Router
  ) { }

  ngOnInit() {
  }


  showMovieDetails(movieId: number) {
    this.router.navigate(['tabs/detailed-movie', {id: movieId}]);
  }

}
