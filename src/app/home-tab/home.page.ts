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

  featureMovies: Movies[] = [];
  moviesByDate: Movies[] = [];
  slideOpts: any;


  constructor(
    private mockService: MockService,
    private loadingController: LoadingController
  ) {
    this.getFeaturedMovies();
    this.presentLoadingController();
    this.slideOpts = Constants.slideOptions;
  }
  ngOnInit() {
  }

  getFeaturedMovies() {
    this.mockService.getFeaturedMovies().subscribe(
      (response) => {
        if (response.status.match('ok')) {
          this.featureMovies = response.data.movies;
          this.getLatestMoviesByDate();
          this.loadingController.dismiss();
        }
      }
    );
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

  async  presentLoadingController() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
  }

}
