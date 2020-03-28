import { Movies } from './../shared/model/Movies';
import { MockService } from './../shared/services/mock.service';
import { Component, OnInit } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
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
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private loadingController: LoadingController
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
          this.routerLoading =  true;
          break;
        }
        default: break;
      }
    });
  }

}
