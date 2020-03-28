import { SlideContentComponent } from './components/slide-content/slide-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, SlideContentComponent],
  exports: [ExploreContainerComponent, SlideContentComponent]
})
export class ExploreContainerComponentModule {}
