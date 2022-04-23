import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home-component/home.component';
import { TitleComponent } from './home/title-component/title.component';
import { SliderComponent } from './home/slider-component/slider.component';
import { RecipeCoverComponent } from './home/recipe-cover-component/recipe-cover.component';
import { HeaderComponent } from './home/header-component/header.component';
import { FooterComponent } from './home/footer-component/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleComponent,
    SliderComponent,
    RecipeCoverComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule // Carousel for Home Recipes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
