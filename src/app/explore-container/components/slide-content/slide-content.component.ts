import { Movies } from './../../../shared/model/Movies';
import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.scss'],
})
export class SlideContentComponent implements OnInit, AfterContentInit {

  constructor(
    private loadingController: LoadingController
  ) { }

  @Input() movies: Movies[] = [];

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  ngOnInit() {
    // this.presentLoadingController();
    console.log(this.movies);
    console.log('slide');
  }

  ngAfterContentInit() {
    if (this.movies != null) {
      this.loadingController.dismiss();
    }
  }

  async  presentLoadingController() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
  }

}
