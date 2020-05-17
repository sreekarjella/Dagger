import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailedMovieService {

  constructor() { }

  // tslint:disable-next-line: variable-name
  private _movieId: number;

  public get movieId(): number {
    return this._movieId;
  }

  public set movieId(value: number) {
    this._movieId = value;
  }
}
