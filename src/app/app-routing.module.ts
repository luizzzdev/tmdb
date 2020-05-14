import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import {DetailsComponent} from './details/details.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  }, 
  {
    path:"search",
    component: SearchComponent
  },
  {
    path:"favorites",
    component: FavoritesComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  { path: 'details/:id', component: DetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
