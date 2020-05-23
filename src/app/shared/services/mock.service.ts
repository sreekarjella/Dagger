import { MoviesResponseMapper, MovieResponseMapper } from './../model/Mappers';
import { Movies } from '@shared/model/Movies';
import { Response } from './../model/Response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as Constants from '@shared/services/constants';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private httpClient: HttpClient) {
  }

  public getMoviesForTopPicks(): Observable<Movies[]> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('sort_by', Constants.LIST_MOVIES_PARAMETERS.SORT_BY.DATE_ADDED);
    queryParameters = queryParameters.append('limit', '50');
    return this.httpClient.get<any>(environment.listOfMovies + '?', { params: queryParameters }).pipe(
      map((response: Response) => {
        const data = new MoviesResponseMapper().map(response);
        return data;
      })
    );
  }

  public getLatestMoviesByDate(): Observable<Movies[]> {
    return this.httpClient.get<Response>(environment.listOfMovies + '?sort=' + Constants.LIST_MOVIES_PARAMETERS.SORT_BY.DATE_ADDED).pipe(
      map((response: Response) => {
        const data = new MoviesResponseMapper().map(response);
        return data;
      })
    );
  }

  public getMostViewedMovies(): Observable<Movies[]> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('sort_by', Constants.LIST_MOVIES_PARAMETERS.SORT_BY.DOWNLOAD_COUNT);
    queryParameters = queryParameters.append('limit', '15');
    queryParameters = queryParameters.append('order_by', Constants.LIST_MOVIES_PARAMETERS.ORDER_BY.DESC);
    return this.httpClient.get<any>(environment.listOfMovies + '?', { params: queryParameters }).pipe(
      map((response: Response) => {
        const data = new MoviesResponseMapper().map(response);
        return data;
      })
    );
  }

  public getTopRatedMovies(): Observable<Movies[]> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('sort_by', Constants.LIST_MOVIES_PARAMETERS.SORT_BY.RATING);
    queryParameters = queryParameters.append('limit', '15');
    queryParameters = queryParameters.append('order_by', Constants.LIST_MOVIES_PARAMETERS.ORDER_BY.DESC);
    return this.httpClient.get<any>(environment.listOfMovies + '?', { params: queryParameters }).pipe(
      map((response: Response) => {
        const data = new MoviesResponseMapper().map(response);
        return data;
      })
    );
  }
  public getListOfMoviesBySearchOperation(searchName: string): Observable<Movies[]> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('sort_by', Constants.LIST_MOVIES_PARAMETERS.SORT_BY.DOWNLOAD_COUNT);
    queryParameters = queryParameters.append('query_term', searchName);
    return this.httpClient.get<Response>(environment.listOfMovies + '?', { params: queryParameters }).pipe(
      map((response: Response) => {
        const data = new MoviesResponseMapper().map(response);
        return data;
      })
    );
  }

  public getMovieById(movieId: number): Observable<Movies> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('movie_id', movieId as unknown as string);
    queryParameters = queryParameters.append('with_images', 'true');
    queryParameters = queryParameters.append('with_cast', true as unknown as string);
    return this.httpClient.get<any>(environment.movieDetails + '?', {params: queryParameters}).pipe(
      map((response) => {
        const data = new MovieResponseMapper().map(response);
        return data;
      })
    );
  }

  public getMoviesSuggestions(movieId: number): Observable<Movies[]> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('movie_id', movieId as unknown as string);
    return this.httpClient.get<any>(environment.movieSuggestions + '?', {params: queryParameters}).pipe(
      map((response: Response) => {
        const data = new MoviesResponseMapper().map(response);
        return data;
      })
    );
  }
}
