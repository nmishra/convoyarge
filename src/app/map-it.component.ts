import { Component } from '@angular/core';

@Component({
	selector: 'map-it',
	templateUrl: 'app/map-it.component.html',
	styleUrls: ['app/map-it.component.css']
})

export class MapItComponent {
	
  title: string = 'Map showing the favorite places';
  lat: number = 51.678418;
  lng: number = 7.809007;
}