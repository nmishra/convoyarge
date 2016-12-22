import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { FavPlaceComponent } from './fav-place.component';
import { MapItComponent } from './map-it.component';
import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    FavPlaceComponent,
    MapItComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2AutoCompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPWbGCgxUFXCB_j46GRkd6dvllRCP2CYs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
