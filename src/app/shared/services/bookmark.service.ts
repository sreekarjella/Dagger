import { ToastService } from './toast.service';
import { Movies } from '@shared/model/Movies';
import { Injectable } from '@angular/core';
import * as Constants from '@shared/services/constants';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(
    private cacheService: CacheService,
    private toastService: ToastService
    ) { }

  bookmarkedMovies: Movies[] = [];

  async fetchAllBookmarkMovies(): Promise<Movies[]> {
    const data = await this.cacheService.getCacheData(Constants.cacheKeys.bookmarks);
    const cachedData = JSON.parse(data.value);
    if (cachedData === null) {
      return [];
    }
    this.bookmarkedMovies = cachedData;
    return Promise.resolve(this.bookmarkedMovies);
  }

  isMovieBookMarked(id: number): boolean {
    const movie = this.bookmarkedMovies.find(x => x.id === id);
    return movie ? true : false;
  }

  async removeMovieFromBookmarks(movieId: number, movie: Movies): Promise<void> {
    const data = await this.cacheService.getCacheData(Constants.cacheKeys.bookmarks);
    const cachedMoviesData: Movies[] = JSON.parse(data.value);
    for (let index = cachedMoviesData.length - 1; index >= 0; index--) {
      if (cachedMoviesData[index].id === movieId) {
        cachedMoviesData.splice(index, 1);
      }
    }
    this.cacheService.storeCacheObjectData(Constants.cacheKeys.bookmarks, cachedMoviesData);
    this.showToastMessage(`${movie.title} removed from bookmarks`);
    return Promise.resolve();
  }

  async bookmarkMovie(movie: Movies): Promise<void> {
    const data = await this.cacheService.getCacheData(Constants.cacheKeys.bookmarks);
    data.value === null ? this.initialBookmark(movie) : this.addMovieToBookmarks(movie);
    this.showToastMessage(`${movie.title} added to bookmarks`);
    return Promise.resolve();
  }

  private initialBookmark(movie: Movies) {
    const bookmarkMovies: Movies[] = [];
    bookmarkMovies.push(movie);
    this.cacheService.storeCacheObjectData(Constants.cacheKeys.bookmarks, bookmarkMovies);
  }

  private addMovieToBookmarks(movie: Movies) {
    this.cacheService.getCacheData(Constants.cacheKeys.bookmarks).then((data) => {
      const cachedMoviesData: Movies[] = JSON.parse(data.value);
      cachedMoviesData.push(movie);
      this.cacheService.storeCacheObjectData(Constants.cacheKeys.bookmarks, cachedMoviesData);
    });
  }

  private showToastMessage(msg: string) {
    const toastConfig = {
      color: 'dark',
      duration: 2000,
      message: msg,
      position: 'top',
      showCloseButton: false
    };
    this.toastService.showToast(toastConfig);
  }
}
