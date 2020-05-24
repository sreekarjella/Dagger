import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarksTabPage } from './bookmarks-tab.page';

const routes: Routes = [
  {
    path: '',
    component: BookmarksTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarksTabPageRoutingModule {}
