import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  getCacheData(key: string):
    Promise<{
      value: string | null;
    }> {
    return Plugins.Storage.get({ key });
  }

  storeCacheObjectData(key: string, value: any): Promise<void> {
    if (value === null || value === undefined || value === []) {
      return Promise.resolve();
    }
    return this.storeCacheData(key, JSON.stringify(value));
  }

  private storeCacheData(key: string, value: string): Promise<void> {
    return Plugins.Storage.set({ key, value });
  }

  removeCacheData(key: string) {
    Plugins.Storage.remove({ key });
  }

  getKeys(): Promise<{
    keys: string[];
  }> {
    return Plugins.Storage.keys();
  }

}
