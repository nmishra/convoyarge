import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FavPlaceService {
  constructor(private http: Http) {}

  get(medium) {
    let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    return this.http.get('favplaces', { search: searchParams })
      .map(response => {
        return response.json().favplaces;
      });
  }
  
  add(favPlace) {
    return this.http.post('favplaces', favPlace)
      .map(response => {});
  }
  
  delete(favPlace) {
    return this.http.delete(`favplaces/${favPlace.id}`)
      .map(response => {});
  }
}
