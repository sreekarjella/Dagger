import { movieCatalogSLideOptions } from './../shared/services/constants';
import { MockService } from './../shared/services/mock.service';
import { Movies } from './../shared/model/Movies';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, IonRouterOutlet } from '@ionic/angular';
import * as Constants from '@shared/services/constants';
import { MovieDetailsComponent } from '../explore-container/components/movie-details/movie-details.component';

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
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
  }
  ngOnInit() {
    this.bannerSlideOpts = Constants.bannerSlideOptions;
    this.movieCatalogSlideOption = Constants.movieCatalogSLideOptions;
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
      }
    );
  }

  showMovieDetails(movieId: number) {
    this.presentModal(movieId);
  }

  async presentModal(movieId: number) {
    const modal = await this.modalController.create({
      component: MovieDetailsComponent,
      componentProps: {
        id: movieId
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.parentOutlet.nativeEl,
      animated: true,
      backdropDismiss: true
    });
    return await modal.present();
  }

}
