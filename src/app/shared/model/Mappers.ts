import { Response } from './Response';
import { Movies } from './Movies';

export class MoviesResponseMapper {
    constructor() {
    }
    map(responseData: Response): Movies[] {
        const response: Movies[] = [];
        responseData.data.movies.forEach((movie) => {
            response.push(movie);
        });
        return response;
    }
}