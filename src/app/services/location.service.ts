/*
* location.service.ts
*/

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import {Location} from '../model/location.model';

@Injectable()
export class LocationService {
  constructor(private http: Http) {}

  // a synchronous test function
  getData() {
    return this.http.get("app/services/locations.json").map((response: Response) => <Location[]>response.json());
  }

  getLocationData(): Promise<Location[]> {
    return this.http.get('app/services/locations.json')
      .toPromise()
      .then(response => response.json() as Location[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
