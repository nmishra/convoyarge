import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
 
@Component({
  selector: 'fav-place',
  templateUrl: 'app/fav-place.component.html',
  styleUrls: ['app/fav-place.component.css']
})
export class FavPlaceComponent {
	
  private searchStr: string;
  private dataService: CompleterData;
  private searchData = [
    { place: 'India', value: '#f00' },
    { place: 'Australia', value: '#0f0' },
    { place: 'United States', value: '#00f' },
    { place: 'Brazil', value: '#0ff' },
    { place: 'Germany', value: '#f0f' },
    { place: 'France', value: '#ff0' },
    { place: 'Spain', value: '#000' }
  ];
 
  constructor(private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'place', 'place');
  }
}
