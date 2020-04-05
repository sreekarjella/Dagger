import { Component, OnInit } from '@angular/core';
import { MockService } from '@shared/services/mock.service';

@Component({
  selector: 'app-search-page',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit {
  private search: string;
  constructor(private mockService: MockService) { }
  ngOnInit(): void {

  }
  private data: any;
  private messages: string = '';
  private flag: boolean = false;
  private show: boolean = false;
  searchMovie(event: any) {

    this.search = event.target.value;
    this.mockService.getListOfMoviesBySerachOperation(this.search).subscribe(resp => {
      this.data = resp.data;
      console.log(this.data);
      if (this.data.movie_count === 0) {
        console.log('Sorry!No product found');
        this.flag = true;
        this.show = false;
      } else {
        this.flag = false;
        this.show = true;
      }

      this.data = this.data.movies;
      console.log(this.data);
    });

  }

}
