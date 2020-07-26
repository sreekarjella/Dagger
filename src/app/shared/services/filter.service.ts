import { IFilters } from './../../search-tab/search.page';
import { Movies } from '@shared/model/Movies';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }
  ratings = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ];

  genres = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Film-noir',
    'Game-show',
    'History',
    'Horror',
    'Music',
    'Mystery',
    'News',
    'Reality-TV',
    'Romance',
    'Sci-Fi',
    'Sport',
    'Talk-Show',
    'Thriller',
    'War',
    'Western'
  ];

  // tslint:disable-next-line: ban-types
  filter(movies: Movies[], filters: IFilters): Movies[] {
    const filterKeys = Object.keys(filters);

    return movies.filter(movie => {
      return filterKeys.some(filterCondition => {
        if (filters[filterCondition].length) {    // passing an empty filter means that filter is ignored.
          switch (filterCondition) {
            case 'ratings':
              if (movie.rating >= filters.rating) {
                return true;
              }
              break;
            case 'generes':
              // return filters[filterCondition].includes(movie[filterCondition]);
              break;
            default:
              break;
          }
        }
        // if (!filters[filterCondition].length) {
        //   return true; // passing an empty filter means that filter is ignored.
        // }
        // return filters[filterCondition].includes(movie[filterCondition]);
      });
    });
  }
}
