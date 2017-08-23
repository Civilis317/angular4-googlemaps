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
  workouts: string[];
  runPath: any;

  constructor(private gpxService: GpxService) {}

  ngOnInit() {
    this.workouts = this.gpxService.getWorkouts();
    this.mapConfig = {
      "id": 0,
      "title": "Delftsehout",
      "lat": 52.02991114333533,
      "lng": 4.387482404708862,
      "zoom": 14,
      "type": "google.maps.MapTypeId.TERRAIN"
    };

    this.googleMap = new GoogleMap(this.mapConfig);
    this.map = this.googleMap.map;
    this.title = this.mapConfig.title;
  }

  private handleError(error: any): void {
    console.error('An error occurred', error);
  }

  showTrackByDate(workout: string) {
    this.clearTrack();
    this.gpxService.getGpxDataByDate(workout)
      .then(data => {
        console.log(data.length)
        this.runPath = new this.googleMap.google.maps.Polyline({
          path: data,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2
        });
        this.runPath.setMap(this.googleMap.map);
      })
  }

  clearTrack() {
    if (this.runPath) {
      this.runPath.setMap(null);
    }
  }

}
