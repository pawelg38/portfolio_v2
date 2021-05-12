import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FindmeComponent } from './findme/findme.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'Home'} },
  { path: 'about', component: AboutComponent, data: {animation: 'About'} },
  { path: 'findme', component: FindmeComponent, data: {animation: 'Share'} },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
