import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError, RouterOutlet } from '@angular/router';
import { Capacitor, Plugins } from '@capacitor/core';
import { slideInAnimation } from '@shared/animations/slide-animation';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private router: Router
  ) {
    this.initializeApp();
  }

  routerLoading: boolean;

  getAnimationData(outlet: RouterOutlet) {
    // tslint:disable-next-line: no-string-literal
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

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
