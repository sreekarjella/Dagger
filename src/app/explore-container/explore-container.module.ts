import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [MovieDetailsComponent],
  exports: [MovieDetailsComponent],
  entryComponents: [MovieDetailsComponent]
})
export class ExploreContainerComponentModule {}
