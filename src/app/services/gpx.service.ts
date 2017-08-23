/*
* gpx.service.ts
*/
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import {MapConfiguration} from '../model/map-config.model';

declare var google: any;

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

  getWorkouts(): string[] {
    let workoutArray: string[] = [];
    workoutArray.push('20170723');
    workoutArray.push('20170730');
    workoutArray.push('20170803');
    return workoutArray;
  }

  getGpxData(): Promise<string> {
    return this.http.get('app/services/gpx-20170723.gpx')
      .toPromise()
      .then(response => response.text() as string)
      .catch(this.handleError);
  }

  getGpxDataByDate(date: string): Promise<any[]> {
    let gpxdata: string;
    let gpxfile = `app/services/gpx-${date}.gpx`;
    return this.http.get(gpxfile)
      .toPromise()
      .then(response => this.createLatLngArray(response.text()))
      .catch(this.handleError);
  }

  private createLatLngArray(gpxdata: string): any[] {
    let latlngArray: any[] = [];
    let lon: string;
    let parser = new DOMParser();
    let xmlDoc: Document = parser.parseFromString(gpxdata, 'text/xml');
    let trkseg: Element = xmlDoc.getElementsByTagName('trkseg')[0];
    let nodeArray: Element[] = [].slice.call(trkseg.getElementsByTagName('trkpt'));
    nodeArray.forEach(node => {
      let lat = Number(node.attributes.getNamedItem('lat').value);
      let lon = Number(node.attributes.getNamedItem('lon').value);
      latlngArray.push(new google.maps.LatLng(lat, lon));
    });
    return latlngArray;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
