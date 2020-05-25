import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailedMoviePageRoutingModule } from './detailed-movie-routing.module';
import { DetailedMoviePage } from './detailed-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailedMoviePageRoutingModule
  ],
  declarations: [DetailedMoviePage]
})
export class DetailedMoviePageModule {}
