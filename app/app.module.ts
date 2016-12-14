import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { Ng2CompleterModule } from "ng2-completer";
import { FormsModule } from "@angular/forms";
import { FavPlaceComponent } from './fav-place.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2CompleterModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FavPlaceComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
