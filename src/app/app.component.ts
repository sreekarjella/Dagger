import { ThemeService } from './shared/services/theme.service';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';
import { Capacitor, Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private router: Router,
    private themeService: ThemeService
  ) {
    this.initializeApp();
  }

  routerLoading: boolean;

  initializeApp() {
    this.initRoutingProgress();
    this.platform.ready().then(() => {
      if (Capacitor.isPluginAvailable('SplashScreen')) {
        Plugins.SplashScreen.hide();
      }
      this.themeService.initializeTheme();
    });
  }

  ngOnInit() {
  }

  private initRoutingProgress() {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.routerLoading = true;
          break;
        }
        case event instanceof NavigationCancel:
        case event instanceof NavigationEnd:
        case event instanceof NavigationError: {
          this.routerLoading = true;
          break;
        }
        default: break;
      }
    });
  }

}
