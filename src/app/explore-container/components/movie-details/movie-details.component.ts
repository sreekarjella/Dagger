import { MockService } from '@shared/services/mock.service';
import { Movies } from './../../../shared/model/Movies';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as Constants from '@shared/services/constants';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {

  @Input() id: number;
  movieData: Movies;
  suggestedMovies: Movies[] = [];
  castSlideOption: any;

  constructor(
    private modalController: ModalController,
    private mockService: MockService
  ) { }

  ngOnInit() {
    this.castSlideOption = Constants.castCatalogSLideOptions;
    this.mockService.getMovieById(this.id).subscribe((response) => {
      this.movieData = response.data.movie;
      console.log(this.movieData);
    });
    this.mockService.getMoviesSuggestions(this.id).subscribe((response) => {
      this.suggestedMovies = response.data.movies;
      console.log(this.suggestedMovies);
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
