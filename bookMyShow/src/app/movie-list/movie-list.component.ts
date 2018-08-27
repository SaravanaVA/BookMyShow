import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, DoCheck {

  movieList: Array<any>;

  constructor(public commonserviceService: CommonserviceService) { }

  ngOnInit() {}

  ngDoCheck() {
    //getting movie from common service
    this.movieList = this.commonserviceService.getMovieList();
  }
}
