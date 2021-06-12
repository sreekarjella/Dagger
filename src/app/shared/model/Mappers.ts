import { Response } from './Response';
import { Movies } from './Movies';

export class MoviesResponseMapper {
    constructor() {
    }
    map(responseData: Response): Movies[] {
        const response: Movies[] = [];
        if (responseData.data.movie_count < 1) {
            return [];
        }
        responseData.data.movies.forEach((movie) => {
            response.push(movie);
        });
        return response;
    }
}

export class MovieResponseMapper {
    constructor() {
    }
    map(responseData): Movies {
        return responseData.data.movie;
    }
}
