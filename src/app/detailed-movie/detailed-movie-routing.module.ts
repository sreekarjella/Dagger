import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedMoviePage } from './detailed-movie.page';

const routes: Routes = [
  {
    path: '',
    component: DetailedMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailedMoviePageRoutingModule {}
