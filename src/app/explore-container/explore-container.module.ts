import { ExpandableCardComponent } from './components/expandable-card/expandable-card.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageShellComponent } from './components/image-shell/image-shell.component';
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
    MovieCoverComponent,
    ImageShellComponent,
    HeaderComponent,
    ExpandableCardComponent
  ],
  exports: [
    MovieCoverComponent,
    ImageShellComponent,
    HeaderComponent,
    ExpandableCardComponent
  ],
  entryComponents: []
})
export class ExploreContainerComponentModule {}
