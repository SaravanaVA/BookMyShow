import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieList: Array<any>;

  constructor() { }

  ngOnInit() {
    this.movieList = [
      {url: '../../assets/image/movies/movie1.jpg', name: 'KK', location: 'Chennai', date: 'Sep 7-8'},
      {url: '../../assets/image/movies/movie2.jpg', name: 'Geetha Govindam', location: 'All location', date: 'Sep 7-8'},
      {url: '../../assets/image/movies/movie3.jpg', name: 'Pyar prema kadhal', location: 'Chennai', date: 'Sep 7-8'},
      {url: '../../assets/image/movies/movie4.jpg', name: 'KKS', location: 'Chennai', date: 'Sep 7-8'},
      {url: '../../assets/image/movies/movie5.jpg', name: 'Alpha', location: 'World wide', date: 'Sep 7-8'},
      {url: '../../assets/image/movies/movie6.jpg', name: 'Vishvaroopam 2', location: 'Chennai', date: 'Sep 7-8'},
      {url: '../../assets/image/movies/movie7.jpg', name: 'HPJ', location: 'Chennai', date: 'Sep 7-8'},
      {url: '../../assets/image/movies/movie8.jpg', name: 'MI', location: 'Chennai', date: 'Sep 7-8'},
    ]
  }

}
