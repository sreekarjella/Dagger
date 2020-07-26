import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MockService } from './mock.service';
import { Movies } from '@shared/model/Movies';
import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { CacheService } from './cache.service';
import * as Constants from '@shared/services/constants';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(
    private mockService: MockService,
    private cacheService: CacheService
  ) { }

  event: any;

  refreshContent(event): Promise<void> {
    this.event = event;
    this.homeContentInitialization().subscribe(() => {
      event.target.complete();
    });
    return Promise.resolve();
  }

  stopRefresher() {
    if (this.event) {
      this.event.target.complete();
    }
  }

  homeContentInitialization(): Observable<void> {
    // tslint:disable-next-line: deprecation
    return forkJoin(
      this.topPicksContent(),
      this.getMostViewedMovies(),
      this.getTopRatedMovies()).pipe(
        map(() => {
          return;
        })
      );
  }

  topPicksContent(): Observable<Movies[]> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('sort_by', Constants.LIST_MOVIES_PARAMETERS.SORT_BY.DATE_ADDED);
    queryParameters = queryParameters.append('limit', '50');
    return this.mockService.getMovies(queryParameters).pipe(
      map((movies: Movies[]) => {
        const sortedMovies = this.sortMoviesForBestPicks(movies);
        this.validateCacheAndStore(Constants.cacheKeys.topPicks, sortedMovies);
        return sortedMovies;
      })
    );
  }

  private sortMoviesForBestPicks(movies: Movies[]): Movies[] {
    const sortedMovies = movies.sort((a, b) => b.rating - a.rating);
    return this.pickTopRatedMovies(sortedMovies);
  }

  private pickTopRatedMovies(movies: Movies[]): Movies[] {
    const bestPick = movies.slice(0, 15);
    return this.sortMoviesBasedOnDate(bestPick);
  }

  private sortMoviesBasedOnDate(movies: Movies[]): Movies[] {
    const dateSortedMovies = movies.sort((a, b) => new Date(b.date_uploaded).getTime() - new Date(a.date_uploaded).getTime());
    return dateSortedMovies;
  }

  getMostViewedMovies(pageNumber = 1): Observable<Movies[]> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('sort_by', Constants.LIST_MOVIES_PARAMETERS.SORT_BY.DOWNLOAD_COUNT);
    queryParameters = queryParameters.append('limit', '15');
    queryParameters = queryParameters.append('page', pageNumber as unknown as string);
    queryParameters = queryParameters.append('order_by', Constants.LIST_MOVIES_PARAMETERS.ORDER_BY.DESC);
    return this.mockService.getMovies(queryParameters).pipe(
      map((movies: Movies[]) => {
        this.validateCacheAndStore(Constants.cacheKeys.mostViewed, movies);
        return movies;
      })
    );
  }

  getTopRatedMovies(pageNumber = 1): Observable<Movies[]> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('sort_by', Constants.LIST_MOVIES_PARAMETERS.SORT_BY.RATING);
    queryParameters = queryParameters.append('limit', '15');
    queryParameters = queryParameters.append('page', pageNumber as unknown as string);
    queryParameters = queryParameters.append('order_by', Constants.LIST_MOVIES_PARAMETERS.ORDER_BY.DESC);
    return this.mockService.getMovies(queryParameters).pipe(
      map((movies: Movies[]) => {
        this.validateCacheAndStore(Constants.cacheKeys.topRated, movies);
        return movies;
      })
    );
  }

  private validateCacheAndStore(key: string, movies: Movies[]) {
    this.cacheService.getCacheData(key).then((data) => {
      data.value === null ? this.initialCaching(key, movies) : this.updateCache(key, movies, data.value);
    });
  }

  private initialCaching(key: string, movies: Movies[]) {
    this.cacheService.storeCacheObjectData(key, movies);
  }

  private updateCache(key: string, movies: Movies[], cachedMovies: string) {
    this.cacheService.storeCacheObjectData(key, movies);
  }

  latestMovies(pageNumber = 1): Observable<Movies[]> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('sort_by', Constants.LIST_MOVIES_PARAMETERS.SORT_BY.DATE_ADDED);
    queryParameters = queryParameters.append('limit', '20');
    queryParameters = queryParameters.append('page', pageNumber as unknown as string);
    return this.mockService.getMovies(queryParameters).pipe(
      map((movies: Movies[]) => {
        return movies;
      })
    );
  }
}
