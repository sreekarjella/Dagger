import { Response } from './../model/Response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LIST_MOVIES_PARAMETERS } from './constants';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private httpClient: HttpClient) { }

  public getListOfMovies(): Observable<any> {
    return this.httpClient.get(environment.listOfMovies);
  }

  public  getFeaturedMovies(): Observable<any> {
    return this.httpClient.get(environment.listOfMovies);
  }

  public getLatestMoviesByDate(): Observable<any> {
    return this.httpClient.get(environment.listOfMovies + '?sort=' + LIST_MOVIES_PARAMETERS.SORT_BY.DATE_ADDED);
  }
}
