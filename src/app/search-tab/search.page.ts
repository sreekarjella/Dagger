import { HomePageService } from '@shared/services/home-page.service';
import { Movies } from './../shared/model/Movies';
import { Component, OnInit } from '@angular/core';
import { MockService } from '@shared/services/mock.service';

@Component({
  selector: 'app-search-page',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit {
  searchData: Movies[] = [];
  latestData: Movies[] = [];
  searchValue = '';
  pageNumber = 1;
  showSpinner = false;

  constructor(
    private mockService: MockService,
    private homePageService: HomePageService
  ) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this.loadLatestMovies();
  }

  searchMovie(event: any) {
    this.searchValue = event.target.value;
    this.showSpinner = true;
    if (event.target.value.length !== 0) {
      this.mockService.getListOfMoviesBySearchOperation(this.searchValue).subscribe((response: Movies[]) => {
        if (response.length !== 0) {
          this.searchData = response;
        } else {
          this.searchData = [];
        }
        this.showSpinner = false;
      });
    } else {
      this.searchData = [];
      this.showSpinner = false;
    }
  }

  loadLatestMovies(): Promise<void> {
    this.homePageService.latestMovies(this.pageNumber).subscribe((movies: Movies[]) => {
      this.latestData = this.latestData.concat(movies);
      this.showSpinner = false;
    });
    return Promise.resolve();
  }

  loadMovies(event) {
    this.pageNumber += 1;
    setTimeout(() => {
      this.loadLatestMovies().then(() => {
        event.target.complete();
      });
    }, 1000);
  }

}
