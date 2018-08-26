// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';

// import {SlideshowModule} from 'ng-simple-slideshow';


// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule, 
//     SlideshowModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SlideshowModule } from './slideshow/slideshow.module';
import { HeaderComponent } from './header/header.component';
import { MainBannerSlideComponent } from './main-banner-slide/main-banner-slide.component';
import { LowerBannerSlideComponent } from './lower-banner-slide/lower-banner-slide.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBannerSlideComponent,
    LowerBannerSlideComponent,
    MovieListComponent,
    SearchMovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SlideshowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
