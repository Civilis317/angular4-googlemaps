/*
* map.component.ts
*/
import {Component, OnInit} from '@angular/core';
import {MapView} from './map';
import {Location} from './model/location.model';
import {LocationService} from './services/location.service';

import {EQ_DATA} from './mock-eq-data';

declare var google: any;

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  mapView: MapView;
  map: any;
  location: Location;
  title: string;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.getLocationData()
      .then((data: Location[]) => {
        this.location = data[0];
        this.mapView = new MapView(google, this.location);
        this.map = this.mapView.map;
        this.title = this.location.title;

        // set style for data layer
        this.map.data.setStyle(this.setFeature);

      })
      .catch(this.handleError);


  }

  private handleError(error: any): void {
    console.error('An error occurred', error);
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
