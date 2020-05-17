import { MovieCoverComponent } from './components/movie-cover/movie-cover.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    MovieCoverComponent
  ],
  exports: [
    MovieCoverComponent
  ],
  entryComponents: []
})
export class ExploreContainerComponentModule {}
