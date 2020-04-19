import { Cast } from './Cast';
import { Torrents } from './Torrents';

export interface Movies {
    id: number;
    url: string;
    imdb_code: string;
    title: string;
    title_english: string;
    title_long: string;
    slug: string;
    year: number;
    rating: number;
    runtime: number;
    genres: string [];
    summary: string;
    description_full: string;
    synopsis: string;
    yt_trailer_code: string;
    language: string;
    mpa_rating: string;
    background_image: string;
    background_image_original: string;
    small_cover_image: string;
    medium_cover_image: string;
    large_cover_image: string;
    cast: Cast[];
    state: string;
    torrents: Torrents [];
    date_uploaded: string;
    date_uploaded_unix: number;
}
