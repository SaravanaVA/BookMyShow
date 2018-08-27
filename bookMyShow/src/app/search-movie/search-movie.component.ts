import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonserviceService } from '../services/commonservice.service';
import { SearchMoviePipe } from './search-movie.pipe'

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
  providers: [ SearchMoviePipe ]
})
export class SearchMovieComponent implements OnInit, DoCheck {

  movieList: Array<string>;
  searchText: string;

  constructor(public commonserviceService: CommonserviceService, private searchMoviePipe: SearchMoviePipe ) { }

  ngOnInit() {
    this.movieList = this.commonserviceService.getMovieListName();    
  }
  ngDoCheck() {
    this.commonserviceService.updateMovieList(this.searchMoviePipe.transform(this.movieList,this.searchText));
  }
}
