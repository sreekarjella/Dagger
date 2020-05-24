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


  /**
   * 
   * @description ideal way for setting toastConfig, Use buttons if necessary
   */
  private _getToastConfig(message: any, position: string): any {
    return {
      message: message.text,
      position,
      color: 'success',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.dismiss();
          }
        }
      ]
    };
  }

}
