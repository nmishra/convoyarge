import { Component } from '@angular/core';
 
@Component({
  selector: 'fav-place',
  templateUrl: 'app/fav-place.component.html',
  styleUrls: ['app/fav-place.component.css']
})
export class FavPlaceComponent {
        
  googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";

  json(obj) {
    return JSON.stringify(obj);
  }
}