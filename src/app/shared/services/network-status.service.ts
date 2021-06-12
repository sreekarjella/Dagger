import { Injectable } from '@angular/core';
import { NetworkStatus, PluginListenerHandle, Network } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkStatusService {

  constructor() { }

  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;

  async checkNetworkStatus(): Promise<void> {
    this.networkListener = Network.addListener('networkStatusChange', status => {
      this.networkStatus = status;
      this.networkStatus.connected ? this.internetConnected() : this.internetNotConnected();
    });
    this.networkStatus = await Network.getStatus();
    // (await Network.getStatus()).connected ? this.internetConnected() : this.internetNotConnected();
  }

  private internetConnected() {
  }

  private async internetNotConnected() {
  }
}
