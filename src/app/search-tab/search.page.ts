import { Response } from './../shared/model/Response';
import { Movies } from './../shared/model/Movies';
import { Component, OnInit } from '@angular/core';
import { MockService } from '@shared/services/mock.service';

@Component({
  selector: 'app-search-page',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit {
  data: Movies[] = [];
  dataLoaded = false;
loading=true;
  constructor(private mockService: MockService) { }

  ngOnInit(): void {
  }
 
  searchMovie(event: any) {
   
    if (event.target.value.length !== 0) {
      this.mockService.getListOfMoviesBySerachOperation(event.target.value).subscribe((resp: Response) => {
        if (resp.data.movies.length !== 0) {
          this.data = resp.data.movies;
        } else {
          this.data = [];
        }
      });
    } else {
      this.data = [];
    }
    this.dataLoaded = true;
  }

}
