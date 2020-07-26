import { HomePageService } from '@shared/services/home-page.service';
import { NetworkStatusService } from '@shared/services/network-status.service';
import { AlertService } from '@shared/services/alert.service';
import { Injectable, ErrorHandler, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {


  constructor(
    @Inject(SplashScreen) public splashScreen: SplashScreen,
    private alertService: AlertService,
    private networkService: NetworkStatusService,
    private homeService: HomePageService
  ) { }

  noInternetConfig = {
    header: 'No Internet',
    subHeader: 'Active internet connection is required for smooth running of the app',
    backdropDismiss: false,
    buttons: [{
      text: 'Okay',
      handler: () => { this.homeService.stopRefresher(); }
    }]
  };

  errorConfig = {
    header: 'Oops!',
    subHeader: 'Unexpected error has occurred. Please try again',
    backdropDismiss: false,
    buttons: [{
      text: 'Okay',
      handler: () => { this.homeService.stopRefresher(); }
    }]
  };

  handleError(error: Error | HttpErrorResponse): void {
    console.log(error);
    this.networkService.networkStatus.connected ?
      this.alertService.presentAlert(this.errorConfig) : this.alertService.presentAlert(this.noInternetConfig);
  }

  private async showAlert() {
    //   const alert = this.alert.create({
    //     header: 'An Error Has Occurred',
    //     subHeader: 'Unfortunately, the app needs to be restarted',
    //     backdropDismiss: false,
    //     buttons: [
    //       {
    //         text: 'Restart',
    //         handler: () => {
    //           // this.splashScreen.show();
    //           window.location.reload();
    //         }
    //       }
    //     ]
    //   });
    //   (await alert).present();
  }
}
