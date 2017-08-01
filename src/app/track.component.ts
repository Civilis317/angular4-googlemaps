/*
* track.component.ts
*/
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {GoogleMap} from './google-map';

import {MapConfiguration} from './model/map-config.model';
import {GpxService} from './services/gpx.service';

@Component({
  selector: 'track-component',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})

export class TrackComponent implements OnInit {
  googleMap: GoogleMap;
  map: any;
  mapConfig: MapConfiguration;
  title: string;

  constructor(private gpxService: GpxService) {}

  ngOnInit() {
    this.mapConfig = {
      "id": 0,
      "title": "Delftsehout",
      "lat": 52.02991114333533,
      "lng": 4.387482404708862,
      "zoom": 13,
      "type": "google.maps.MapTypeId.TERRAIN"
    };

    this.googleMap = new GoogleMap(this.mapConfig);
    this.map = this.googleMap.map;
    this.title = this.mapConfig.title;
  }

  private handleError(error: any): void {
    console.error('An error occurred', error);
  }

  showTrack(): void {
    this.gpxService.getGpxData()
      .then(data => {
        //console.log(data);
        let latlngArray: any[] = [];
        let lat: number;
        let lon: string;
        let parser = new DOMParser();
        let xmlDoc: Document = parser.parseFromString(data, 'text/xml');
        let trkseg: Element = xmlDoc.getElementsByTagName('trkseg')[0];
        let nodeArray: Element[] = [].slice.call(trkseg.getElementsByTagName('trkpt'));
        nodeArray.forEach(node => {
          //          console.log(node);
          lat = Number(node.attributes.getNamedItem('lat').value);
          lon = node.attributes.getNamedItem('lon').value
          latlngArray.push(new this.googleMap.google.maps.LatLng(lat, lon));

          console.log('lat: ' + lat + ', lon: ' + lon)
        });
        let runPath = new this.googleMap.google.maps.Polyline({
          path: latlngArray,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2
        });
        runPath.setMap(this.googleMap.map);

      })

  }
}
