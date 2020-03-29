import { Movies } from './../../../shared/model/Movies';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {

  @Input() movieData: Movies;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

}
