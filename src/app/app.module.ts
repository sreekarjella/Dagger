import { CacheService } from '@shared/services/cache.service';
import { HomePageService } from '@shared/services/home-page.service';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookmarkService } from '@shared/services/bookmark.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalHttpInterceptorService } from '@shared/services/global-http-interceptor.service';
import { ErrorHandlerService } from '@shared/services/error-handler.service';
import { NetworkStatusService } from '@shared/services/network-status.service';
import * as Constants from '@shared/services/constants';


export function bookmarksAppInit(bookmarkService: BookmarkService) {
  return (): Promise<any> => {
    return bookmarkService.fetchAllBookmarkMovies();
  };
}

export function networkAppInit(networkStatusService: NetworkStatusService) {
  return (): Promise<any> => {
    return networkStatusService.checkNetworkStatus();
  };
}

export function homeAppInit(homeService: HomePageService, cacheService: CacheService) {
  return async (): Promise<any> => {
    const data = await cacheService.getKeys();
    data.keys.includes(Constants.cacheKeys.topPicks) ? Promise.resolve() : homeService.homeContentInitialization().toPromise();
  };
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    {
      provide: APP_INITIALIZER,
      useFactory: networkAppInit,
      deps: [NetworkStatusService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: bookmarksAppInit,
      deps: [BookmarkService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: homeAppInit,
      deps: [HomePageService, CacheService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
