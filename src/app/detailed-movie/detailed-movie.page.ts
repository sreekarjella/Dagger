import { BookmarkService } from './../shared/services/bookmark.service';
import { ToastService } from './../shared/services/toast.service';
import { MockService } from '@shared/services/mock.service';
import { Movies } from '@shared/model/Movies';
import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CacheService } from '@shared/services/cache.service';
import * as Constants from '@shared/services/constants';

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
  loadingAnimation = '<ion-spinner></ion-spinner>';
  bookmarkIcon = 'heart-outline';

  constructor(
    private mockService: MockService,
    private location: LocationStrategy,
    private router: Router,
    private route: ActivatedRoute,
    private bookmarkService: BookmarkService
  ) { }

  ngOnInit() {
    this.dataLoaded = false;
    this.route.paramMap.subscribe((value) => {
      this.movieId = +value.get('id');
    });
    if (this.movieId !== undefined) {
      this.bookmarkIcon = this.bookmarkService.isMovieBookMarked(this.movieId) ? 'heart' : 'heart-outline';
      this.mockService.getMovieById(this.movieId).subscribe((response: Movies) => {
        this.movieData = response;
        this.dataLoaded = true;
      });
      this.mockService.getMoviesSuggestions(this.movieId).subscribe((response: Movies[]) => {
        this.suggestedMovies = response;
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
    this.router.navigate(['/detailed-movie', { id: movieId }]);
  }

  addOrRemoveBookmark() {
    this.bookmarkIcon === 'heart-outline' ? this.bookmarkMovie() : this.removeMovieFromBookmarks();
  }

  removeMovieFromBookmarks() {
    this.bookmarkService.removeMovieFromBookmarks(this.movieId, this.movieData).then(() =>{
      this.bookmarkIcon = 'heart-outline';
    });
  }

  bookmarkMovie() {
    this.bookmarkService.bookmarkMovie(this.movieData).then(() => {
      this.bookmarkIcon = 'heart';
    });
  }

}
