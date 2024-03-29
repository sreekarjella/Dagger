import { MoviesResponseMapper, MovieResponseMapper } from '@shared/model/Mappers';
import { Movies } from '@shared/model/Movies';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as Constants from '@shared/services/constants';
import { Response } from '@shared/model/Response';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private httpClient: HttpClient) {
  }

  public getMovies(queryParameters: HttpParams): Observable<Movies[]> {
    return this.httpClient.get<Response>(environment.listOfMovies + '?', { params: queryParameters }).pipe(
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
    return this.httpClient.get<any>(environment.movieDetails + '?', { params: queryParameters }).pipe(
      map((response) => {
        const data = new MovieResponseMapper().map(response);
        return data;
      })
    );
  }

  public getMoviesSuggestions(movieId: number): Observable<Movies[]> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('movie_id', movieId as unknown as string);
    return this.httpClient.get<Response>(environment.movieSuggestions + '?', { params: queryParameters }).pipe(
      map((response: Response) => {
        const data = new MoviesResponseMapper().map(response);
        return data;
      })
    );
  }
}
