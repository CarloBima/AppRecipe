import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home/home-component/home-component.component';
import { TitleComponentComponent } from './home/title-component/title-component.component';
import { SliderComponentComponent } from './home/slider-component/slider-component.component';
import { RecipeCoverComponentComponent } from './home/recipe-cover-component/recipe-cover-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    TitleComponentComponent,
    SliderComponentComponent,
    RecipeCoverComponentComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule // Carousel for Home Recipes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
