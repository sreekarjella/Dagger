import { Movies } from './../../../shared/model/Movies';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.scss'],
})
export class MovieCoverComponent implements OnInit {

  @Input()
  movies: Movies[];

  constructor(
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
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

  showMovieDetails(movieId: number) {
    this.presentModal(movieId);
  }

}
