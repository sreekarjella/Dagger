import { Movies } from './Movies';

export interface Data {
    movie_count: number;
    limit: number;
    page_number: number;
    movies: Movies [];
}
