import { SlideContentComponent } from './components/slide-content/slide-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [SlideContentComponent],
  exports: [SlideContentComponent],
  entryComponents: [SlideContentComponent]
})
export class ExploreContainerComponentModule {}
