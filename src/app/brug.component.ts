/*
* brug.component.ts
*/
import {Component, OnInit} from '@angular/core';
import {MapView} from './map';

declare var google: any;

@Component({
  selector: 'map-component',
  templateUrl: './brug.component.html',
  styleUrls: ['./brug.component.css']
})

export class BrugComponent implements OnInit {
  mapView: MapView = new MapView(google);
  map: any;

  constructor() {}

  ngOnInit() {
    this.mapView.title = 'Schagerbrug';
    this.mapView.lat = 52.810944;
    this.mapView.lng = 4.740854;
    this.mapView.zoom = 10;
    this.mapView.init();
    this.map = this.mapView.map;
  }

  initialize() {
    console.log('google api loaded')
  }

}
