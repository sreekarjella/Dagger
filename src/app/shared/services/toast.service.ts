import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) {}

  public showToast(toastConfig) {
    this._displayToastMessage(toastConfig);
  }

  public dismiss() {
    this.toastController.dismiss();
  }

  private async _displayToastMessage(toastConfig) {
    const toast = await this.toastController.create(toastConfig);
    await toast.present();
  }

}
