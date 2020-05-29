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
  data: Movies[] = [];
  dataLoaded = false;
  searchValue = '';
  pageNumber = 1;
  constructor(
    private mockService: MockService,
    private homePageService: HomePageService
  ) { }

  ngOnInit(): void {
    this.loadLatestMovies();
  }

  searchMovie(event: any) {
    this.searchValue = event.target.value;
    if (event.target.value.length !== 0) {
      this.mockService.getListOfMoviesBySearchOperation(this.searchValue).subscribe((response: Movies[]) => {
        if (response.length !== 0) {
          this.data = response;
        } else {
          this.data = [];
        }
      });
    } else {
      this.data = [];
    }
    this.dataLoaded = true;
  }

  loadLatestMovies(): Promise<void> {
    this.homePageService.latestMovies(this.pageNumber).subscribe((movies: Movies[]) => {
      movies.forEach((movie) => {
        this.data.push(movie);
      });
      this.dataLoaded = true;
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
