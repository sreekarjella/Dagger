import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
}
