import { Movies } from './../../../shared/model/Movies';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.scss'],
})
export class MovieCoverComponent implements OnInit {

  @Input()
  movies: Movies[];

  constructor() { }

  ngOnInit() {
  }

}
