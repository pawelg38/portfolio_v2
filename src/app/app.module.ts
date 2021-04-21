import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Test3Component } from './test3/test3.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HelloSectionComponent } from './hello-section/hello-section.component';
import { WorkshopComponent } from './workshop/workshop.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    AboutComponent,
    Test3Component,
    FooterBarComponent,
    HelloSectionComponent,
    WorkshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
