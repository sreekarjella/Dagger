import { ExploreContainerComponentModule } from './../explore-container/explore-container.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookmarksTabPageRoutingModule } from './bookmarks-tab-routing.module';
import { BookmarksTabPage } from './bookmarks-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookmarksTabPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [BookmarksTabPage]
})
export class BookmarksTabPageModule {}
