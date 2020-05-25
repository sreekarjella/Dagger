import { HomePageService } from '@shared/services/home-page.service';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BookmarkService } from '@shared/services/bookmark.service';

export function bookmarksAppInit(bookmarkService: BookmarkService) {
  return (): Promise<any> => {
    return bookmarkService.fetchAllBookmarkMovies();
  };
}

export function homeAppInit(homeService: HomePageService) {
  return (): Promise<any> => {
    return homeService.homeContentInitialization().toPromise();
  }
}


@NgModule({
  declarations: [AppComponent, HeaderComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: homeAppInit,
      deps: [HomePageService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: bookmarksAppInit,
      deps: [BookmarkService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
