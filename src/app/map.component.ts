/*
* map.component.ts
*/
import {Component, OnInit} from '@angular/core';
import {EQ_DATA} from './mock-eq-data';

declare var google: any;

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  mapTitle: string = 'First map';
  lat: number = 20;
  lng: number = 10;
  zoom: number = 3;
  map: any;

  constructor() {}

  ngOnInit() {
    // set map properties
    const mapProp = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: this.zoom,
      mapTypeId: google.maps.MapTypeId.TERRAIN
      //      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // init map
    this.map = new google.maps.Map(document.getElementById('map'), mapProp);

    // set style for data layer
    this.map.data.setStyle(this.setFeature);
  }

  showEarthQuakes(): void {
    this.map.data.addGeoJson(EQ_DATA);
  }

  setFeature(feature: any) {
    let magnitude = feature.getProperty('mag');
    let icon = {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: 'red',
      fillOpacity: .2,
      scale: Math.pow(2, magnitude) / 2,
      strokeColor: 'white',
      strokeWeight: .5
    };
    return {icon: icon};
  }

}
