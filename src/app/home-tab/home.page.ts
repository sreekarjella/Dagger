import { MockService } from './../../shared/services/mock.service';
import { Movies } from './../../shared/model/Movies';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  featureMovies: Movies[] = [];

  constructor(private mockService: MockService) {
    this.getFeaturedMovies();
    console.log(this.featureMovies);
  }

  getFeaturedMovies() {
    this.mockService.getFeaturedMovies().subscribe(
      (response) => {
        console.log(response.data.movies);
        if (response.status.match('ok')) {
          this.featureMovies = response.data.movies;
        }
      }
    );
  }
}
