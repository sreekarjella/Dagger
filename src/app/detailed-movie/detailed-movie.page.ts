import { DetailedMovieService } from './../shared/services/detailed-movie.service';
import { MockService } from '@shared/services/mock.service';
import { Movies } from '@shared/model/Movies';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-movie',
  templateUrl: './detailed-movie.page.html',
  styleUrls: ['./detailed-movie.page.scss'],
})
export class DetailedMoviePage implements OnInit {

  movieId: number;
  movieData: Movies;
  suggestedMovies: Movies[] = [];
  castSlideOption: any;
  dataLoaded = false;

  constructor(
    private detailedMovieService: DetailedMovieService,
    private mockService: MockService,
    private locationHistory: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataLoaded = false;
    this.movieId = this.detailedMovieService.movieId;
    if (this.movieId !== undefined) {
      this.mockService.getMovieById(this.movieId).subscribe((response) => {
        this.movieData = response.data.movie;
        this.dataLoaded = true;
      });
      this.mockService.getMoviesSuggestions(this.movieId).subscribe((response) => {
        this.suggestedMovies = response.data.movies;
        this.dataLoaded = true;
      });
    } else {
      this.router.navigateByUrl('/tabs/HomeTab');
    }

  }

  goBack() {
    this.locationHistory.back();
  }

  suggestedMovieReload(id: number) {
    this.detailedMovieService.movieId = id;
    this.ngOnInit();
  }

}
