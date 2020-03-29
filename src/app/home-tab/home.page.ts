import { MockService } from './../shared/services/mock.service';
import { Movies } from './../shared/model/Movies';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as Constants from '@shared/services/constants';

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
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 50,
    centeredSlides: false,
  };


  constructor(
    private mockService: MockService,
    private loadingController: LoadingController
  ) {
  }
  ngOnInit() {
    this.presentLoadingController();
    this.bannerSlideOpts = Constants.slideOptions;
    this.getLatestMoviesByDate();
    this.getMostViewedMovies();
    this.getTopRatedMovies();
  }


  getLatestMoviesByDate() {
    this.mockService.getLatestMoviesByDate().subscribe(
      (response) => {
        if (response.status.match('ok')) {
          this.moviesByDate = response.data.movies;
        }
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
        this.loadingController.dismiss();
      }
    );
  }

  async  presentLoadingController() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
  }

}
