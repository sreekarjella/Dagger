import { Injectable } from '@angular/core';
import { MockService } from './mock.service';
import { Movies } from '@shared/model/Movies';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private mockService: MockService) { }

  topPicksContent(): Observable<Movies[]> {
    return this.mockService.getMoviesForTopPicks().pipe(
      map((movies: Movies[]) => {
        const sortedMovies = this.sortMoviesBasedOnRating(movies);
        return sortedMovies;
      })
    );
  }

  private sortMoviesBasedOnRating(movies: Movies[]): Movies[] {
    const sortedMovies = movies.sort((a, b) => b.rating - a.rating);
    return this.pickTopRatedMovies(sortedMovies);
  }

  private pickTopRatedMovies(movies: Movies[]): Movies[] {
    const bestPick = movies.slice(0, 14);
    return bestPick;
  }
}
