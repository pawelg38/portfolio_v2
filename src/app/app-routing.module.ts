import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Test3Component } from './test3/test3.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
  { path: 'test3', component: Test3Component, data: {animation: 'FilterPage'} },
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
