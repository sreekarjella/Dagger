import { MockService } from '@shared/services/mock.service';
import { Movies } from '@shared/model/Movies';
import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-movie',
  templateUrl: './detailed-movie.page.html',
  styleUrls: ['./detailed-movie.page.scss'],
})
export class DetailedMoviePage implements OnInit {

  movieId: number;
  movieData: Movies;
  suggestedMovies: Movies[] = [];
  castSlideOption: any;
  dataLoaded = false;

  constructor(
    private mockService: MockService,
    private location: LocationStrategy,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.dataLoaded = false;
    this.route.paramMap.subscribe((value) => {
      this.movieId = +value.get('id');
    });
    if (this.movieId !== undefined) {
      this.mockService.getMovieById(this.movieId).subscribe((response) => {
        this.movieData = response.data.movie;
        this.dataLoaded = true;
      });
      this.mockService.getMoviesSuggestions(this.movieId).subscribe((response) => {
        this.suggestedMovies = response.data.movies;
        this.dataLoaded = true;
      });
    } else {
      this.router.navigateByUrl('/tabs/HomeTab');
    }

  }

  goBack() {
    this.location.back();
  }

  suggestedMovieReload(movieId: number) {
    this.router.navigate(['/detailed-movie', {id: movieId}]);
  }

}
