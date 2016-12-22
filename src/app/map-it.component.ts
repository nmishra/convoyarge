import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
	selector: 'map-it',
	templateUrl: 'app/map-it.component.html',
	styleUrls: ['app/map-it.component.css']
})

export class MapItComponent implements OnChanges{
  
  @Input() lat: number;
  @Input() lng: number;
  
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      console.log("propName ="+propName);
      let changedProp = changes[propName];
      //console.log("Changed prop - "+changedProp);
      let from = JSON.stringify(changedProp.previousValue);
      let to =   JSON.stringify(changedProp.currentValue);
      //console.log("from - "+from+" to - "+to);
    }
  }
}