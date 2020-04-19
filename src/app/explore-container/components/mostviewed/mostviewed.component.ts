import { Component, OnInit } from '@angular/core';
import { Movies } from '@shared/model/Movies';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-mostviewed',
  templateUrl: './mostviewed.component.html',
  styleUrls: ['./mostviewed.component.scss'],
})
export class MostviewedComponent implements OnInit {
  mostViewedMovies: Movies[] = [];
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
//console.log(this.routerOutlet.getContext());

   
  }

}
