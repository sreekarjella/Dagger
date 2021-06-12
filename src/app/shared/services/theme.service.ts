import { Plugins } from '@capacitor/core';
import { BehaviorSubject } from 'rxjs';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CacheService } from './cache.service';
import * as Constants from '@shared/services/constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode = false;
  darkMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.darkMode);

  constructor(
    private cacheService: CacheService
  ) {
    this.initializeTheme();
   }

  initializeTheme() {
    this.cacheService.getCacheData(Constants.cacheKeys.theme).then((data) => {
      if (data) {
        this.darkMode = JSON.parse(data.value);
        this.setAppTheme(this.darkMode);
      }
    });
  }

  toggleAppTheme() {
    this.darkMode = !this.darkMode;
    this.setAppTheme(this.darkMode);
  }

  private setAppTheme(darkMode: boolean) {
    this.darkMode = darkMode;
    this.darkMode ? this.darkModeConfiguration() : this.lightModeConfiguration();
  }

  private darkModeConfiguration() {
    document.body.classList.add('dark');
    this.updateDarkModeInCache();
  }

  private lightModeConfiguration() {
    document.body.classList.remove('dark');
    this.updateDarkModeInCache();
  }

  private updateDarkModeInCache() {
    this.cacheService.storeCacheObjectData(Constants.cacheKeys.theme, this.darkMode).then(() => {
      this.darkMode$.next(this.darkMode);
    });
  }

}
