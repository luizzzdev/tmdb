import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MovieCardComponent } from './layout-components/movie-card/movie-card.component';
import { NavbarComponent } from './layout-components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { CarouselBackdropPathComponent } from './layout-components/carousel-backdrop-path/carousel-backdrop-path.component';
import { MovieBackCardComponent } from './layout-components/movie-back-card/movie-back-card.component';
import { CarousellSeriesComponent } from './layout-components/carousell-series/carousell-series.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FavoritesComponent,
    LoginComponent,
    MovieCardComponent,
    NavbarComponent,
    CarouselBackdropPathComponent,
    MovieBackCardComponent,
    CarousellSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
