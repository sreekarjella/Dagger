import { Component, OnInit } from '@angular/core';
import { Movies } from '@shared/model/Movies';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-mostViewed',
  templateUrl: './most-viewed.component.html',
  styleUrls: ['./most-viewed.component.scss'],
})
export class MostViewedComponent implements OnInit {
  mostViewedMovies: Movies[] = [];
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
  }

}
