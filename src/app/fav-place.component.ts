import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'fav-place',
  templateUrl: 'app/fav-place.component.html',
  styleUrls: ['app/fav-place.component.css']
})
export class FavPlaceComponent {
   
  lat: number;
  lng: number;

  googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";

  json(obj) {
    console.log("Json called -"+obj);
    return JSON.stringify(obj);
  }

  setLatLng(location){
    console.log("SetLatLng called - "+location);
   
    if(location){
	    this.lat = location.lat;
	  	this.lng = location.lng;
    }
  	
  }
}