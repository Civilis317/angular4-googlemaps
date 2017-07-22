/*
* brug.component.ts
*/
import {Component, OnInit} from '@angular/core';

declare var google: any;

@Component({
  selector: 'map-component',
  templateUrl: './brug.component.html',
  styleUrls: ['./brug.component.css']
})

export class BrugComponent implements OnInit {
  mapTitle: string = 'Schagerbrug';
  lat: number = 52.810944;
  lng: number = 4.740854;
  zoom: number = 16;
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
  }

}
