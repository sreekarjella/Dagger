import { Movies } from './../model/Movies';
import { Response } from './../model/Response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as Constants from '@shared/services/constants';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private httpClient: HttpClient) {
  }

  public getListOfMovies(): Observable<any> {
    return this.httpClient.get(environment.listOfMovies);
  }

  public getFeaturedMovies(): Observable<any> {
    return this.httpClient.get(environment.listOfMovies);
  }

  public getLatestMoviesByDate(): Observable<Response> {
    return this.httpClient.get<Response>(environment.listOfMovies + '?sort=' + Constants.LIST_MOVIES_PARAMETERS.SORT_BY.DATE_ADDED);
  }

  public getMostViewedMovies(): Observable<any> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('sort_by', Constants.LIST_MOVIES_PARAMETERS.SORT_BY.DOWNLOAD_COUNT);
    queryParameters = queryParameters.append('limit', '15');
    queryParameters = queryParameters.append('order_by', Constants.LIST_MOVIES_PARAMETERS.ORDER_BY.DESC);
    return this.httpClient.get<any>(environment.listOfMovies + '?', { params: queryParameters });
  }

  public getTopRatedMovies(): Observable<any> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('sort_by', Constants.LIST_MOVIES_PARAMETERS.SORT_BY.RATING);
    queryParameters = queryParameters.append('limit', '15');
    queryParameters = queryParameters.append('order_by', Constants.LIST_MOVIES_PARAMETERS.ORDER_BY.DESC);
    return this.httpClient.get<any>(environment.listOfMovies + '?', { params: queryParameters });
  }
  public getListOfMoviesBySerachOperation(searchName: string): Observable<Response> {
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('sort_by', Constants.LIST_MOVIES_PARAMETERS.SORT_BY.DOWNLOAD_COUNT);
    queryParameters = queryParameters.append('limit', '15');
    queryParameters = queryParameters.append('query_term', searchName);
    return this.httpClient.get<Response>(environment.listOfMovies + '?', { params: queryParameters });
  }
}
