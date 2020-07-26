import { HomePageService } from '@shared/services/home-page.service';
import { Movies } from './../shared/model/Movies';
import { Component, OnInit } from '@angular/core';
import { MockService } from '@shared/services/mock.service';
import { FilterService } from '@shared/services/filter.service';

export interface IFilters {
  rating?: number;
  generes?: string[];
}
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
  genre: string[];
  rating: string;
  generes: string[];
  ratings: string[];
  filters: IFilters = {
  };

  constructor(
    private mockService: MockService,
    private homePageService: HomePageService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this.generes = this.filterService.genres;
    this.ratings = this.filterService.ratings;
    this.loadLatestMovies();
  }

  onSelectGenre() {
    this.filters.generes = this.genre;
    console.log(this.filters);
  }

  onSelectRating() {
    this.filters.rating = +this.rating.charAt(0);
    console.log(this.filters);
  }

  searchMovie() {
    this.showSpinner = true;
    if (this.searchValue.length !== 0) {
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
        this.latestData.forEach(movie => {
          console.log(`before ==> ${movie.id} ==> ${movie.rating}`);
        });
        const filteredData = this.filterService.filter(this.latestData, this.filters);
        filteredData.forEach(movie => {
          console.log(`after ==> ${movie.id} ==> ${movie.rating} ==> ${movie.genres}`);
        });
      });
    }, 1000);
  }

}
