import { Plugins } from '@capacitor/core';
import { Movies } from '@shared/model/Movies';
import { Component, OnInit } from '@angular/core';
import * as Constants from '@shared/services/constants';
import { Router } from '@angular/router';
import { HomePageService } from '@shared/services/home-page.service';
import { CacheService } from '@shared/services/cache.service';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  topPickMovies: Movies[] = [];
  mostViewedMovies: Movies[] = [];
  topRatedMovies: Movies[] = [];
  bannerSlideOpts: any;
  movieCatalogSlideOption: any;

  constructor(
    private router: Router,
    private homeService: HomePageService,
    private cacheService: CacheService
  ) {
  }
  ngOnInit() {
    this.bannerSlideOpts = Constants.bannerSlideOptions;
    this.movieCatalogSlideOption = Constants.movieCatalogSlideOptions;
    this.onInitInitializations();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.homeService.homeContentInitialization().subscribe(() => {
        this.onInitInitializations();
      });
    }, 10000);
  }

  onInitInitializations() {
    this.getTopPickMovies();
    this.getMostViewedMovies();
    this.getTopRatedMovies();
  }

  getTopPickMovies() {
    this.cacheService.getCacheData(Constants.cacheKeys.topPicks).then((data) => {
      this.topPickMovies = JSON.parse(data.value);
    });
  }

  getMostViewedMovies() {
    this.cacheService.getCacheData(Constants.cacheKeys.mostViewed).then((data) => {
      this.mostViewedMovies = JSON.parse(data.value);
    });
  }

  getTopRatedMovies() {
    this.cacheService.getCacheData(Constants.cacheKeys.topRated).then((data) => {
      this.topRatedMovies = JSON.parse(data.value);
    });
  }

  showMovieDetails(movieId: number) {
    this.router.navigate(['tabs/detailed-movie', { id: movieId }]);
  }

  refreshHomeContent(event) {
    this.homeService.refreshContent(event).then(() =>
      this.onInitInitializations()
    );
  }

}
