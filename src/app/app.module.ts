import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';

import { MenuComponent } from "./Components/Blocks/Menu/menu.component";
import { SliderComoponent } from "./Components/Blocks/Slider/slider.component";
import { UsersComponent } from "./Components/Blocks/Users/users.component";
import { CategoriesComponent } from "./Components/Blocks/Categories/category.component";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComoponent,
    UsersComponent,
    CategoriesComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
