import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) {
    alertController.create({ animated: false }).then(t => { t.present(); t.dismiss(); });
  }

  async presentAlert(alertConfig) {
    await this.showAlert(alertConfig);
  }

  private async showAlert(alertConfig) {
    const alert = await this.alertController.create(alertConfig);
    await alert.present();
  }
}
