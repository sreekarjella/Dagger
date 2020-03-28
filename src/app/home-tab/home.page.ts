import { MockService } from './../../shared/services/mock.service';
import { Movies } from './../../shared/model/Movies';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  featureMovies: Movies[] = [];

  constructor(
    private mockService: MockService,
    private loadingController: LoadingController
    ) {
    // this.getFeaturedMovies();
    // this.presentLoadingController();
    // console.log(this.featureMovies);
  }

  getFeaturedMovies() {
    this.mockService.getFeaturedMovies().subscribe(
      (response) => {
        console.log(response.data.movies);
        if (response.status.match('ok')) {
          this.featureMovies = response.data.movies;
          this.loadingController.dismiss();
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
