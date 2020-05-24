import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsTabPage } from './settings-tab.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsTabPageRoutingModule {}
