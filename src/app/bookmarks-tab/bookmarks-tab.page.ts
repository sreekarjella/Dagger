import { BookmarkService } from './../shared/services/bookmark.service';
import { Movies } from '@shared/model/Movies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks-tab',
  templateUrl: './bookmarks-tab.page.html',
  styleUrls: ['./bookmarks-tab.page.scss'],
})
export class BookmarksTabPage implements OnInit {

  constructor(
    private bookmarkService: BookmarkService
  ) { }

  cachedBookmarkMovies: Movies[] = [];

  ngOnInit() {
    this.cachedBookmarkMovies = this.bookmarkService.bookmarkedMovies;
  }

  refreshCachedMovies(event) {
    setTimeout(() => {
      this.bookmarkService.fetchAllBookmarkMovies().then((movies: Movies[]) => {
        this.cachedBookmarkMovies = movies;
        event.target.complete();
      });
    }, 1000);
  }

}
