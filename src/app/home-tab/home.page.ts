import { DetailedMovieService } from './../shared/services/detailed-movie.service';
import { MockService } from './../shared/services/mock.service';
import { Movies } from './../shared/model/Movies';
import { Component, OnInit } from '@angular/core';
import * as Constants from '@shared/services/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  moviesByDate: Movies[] = [];
  mostViewedMovies: Movies[] = [];
  topRatedMovies: Movies[] = [];
  bannerSlideOpts: any;
  movieCatalogSlideOption: any;

  constructor(
    private mockService: MockService,
    private router: Router,
    private detailedMovieService: DetailedMovieService
  ) {
  }
  ngOnInit() {
    this.bannerSlideOpts = Constants.bannerSlideOptions;
    this.movieCatalogSlideOption = Constants.movieCatalogSlideOptions;
    this.getLatestMoviesByDate();
    this.getMostViewedMovies();
    this.getTopRatedMovies();
  }

  getLatestMoviesByDate() {
    this.mockService.getLatestMoviesByDate().subscribe(
      (response) => {
        this.moviesByDate = response;
      }
    );
  }

  getMostViewedMovies() {
    this.mockService.getMostViewedMovies().subscribe(
      (response) => {
        this.mostViewedMovies = response.data.movies;
      }
    );
  }

  getTopRatedMovies() {
    this.mockService.getTopRatedMovies().subscribe(
      (response) => {
        this.topRatedMovies = response.data.movies;
      }
    );
  }

  showMovieDetails(movieId: number) {
    this.detailedMovieService.movieId = movieId;
    this.router.navigateByUrl('/detailed-movie');
  }

}
