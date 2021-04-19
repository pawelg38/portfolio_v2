import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';

const routes: Routes = [
  { path: 'test2', component: Test2Component, data: {animation: 'AboutPage'} },
  { path: 'test3', component: Test3Component },
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
