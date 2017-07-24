/*
* map-config.service.ts
*/

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import {MapConfiguration} from '../model/map-config.model';

@Injectable()
export class MapConfigurationService {
  constructor(private http: Http) {}

  // a synchronous test function
  getData() {
    return this.http.get("app/services/map-configs.json").map((response: Response) => <MapConfiguration[]>response.json());
  }

  getConfigurations(): Promise<MapConfiguration[]> {
    return this.http.get('app/services/map-configs.json')
      .toPromise()
      .then(response => response.json() as MapConfiguration[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
