import { MockService } from './../shared/services/mock.service';
import { Movies } from './../shared/model/Movies';
import { Component, OnInit } from '@angular/core';
import * as Constants from '@shared/services/constants';
import { Router } from '@angular/router';
import { HomePageService } from '@shared/services/home-page.service';

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
    private homeService: HomePageService
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
    this.homeService.topPicksContent().subscribe(
      (response: Movies[]) => {
        this.moviesByDate = response;
      }
    );
  }

  getMostViewedMovies() {
    this.mockService.getMostViewedMovies().subscribe(
      (response: Movies[]) => {
        this.mostViewedMovies = response;
      }
    );
  }

  getTopRatedMovies() {
    this.mockService.getTopRatedMovies().subscribe(
      (response: Movies[]) => {
        this.topRatedMovies = response;
      }
    );
  }

  showMovieDetails(movieId: number) {
    this.router.navigate(['/detailed-movie', {id: movieId}]);
  }

}
