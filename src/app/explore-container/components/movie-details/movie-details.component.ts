import { MockService } from '@shared/services/mock.service';
import { Movies } from './../../../shared/model/Movies';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {

  @Input() id: number;
  movieData: Movies;

  constructor(
    private modalController: ModalController,
    private mockService: MockService
  ) { }

  ngOnInit() {
    this.mockService.getMovieById(this.id).subscribe((response) => {
      this.movieData = response.data.movie;
      console.log(this.movieData);
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
