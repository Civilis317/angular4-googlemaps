/*
* gpx.service.ts
*/
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import {MapConfiguration} from '../model/map-config.model';

@Injectable()
export class GpxService {
  private testdata = {
    "club": "ajax",
    "year": 1900
  }

  constructor(private http: Http) {}

  // a synchronous test function
  getData() {
    return this.testdata
  }

  getGpxData(): Promise<string> {
    return this.http.get('app/services/gpx-20170723.gpx')
      .toPromise()
      .then(response => response.text() as string)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
