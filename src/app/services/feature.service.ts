/*
* feature.service.ts
*/

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FeatureService {
  constructor(private http: Http) {}

  getShipData() {
    return this.http.get('app/services/schagerbrug-features.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
