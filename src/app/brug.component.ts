/*
* brug.component.ts
*/
import {Component, OnInit} from '@angular/core';
import {MapView} from './map';

import {Location} from './model/location.model';
import {LocationService} from './services/location.service';

declare var google: any;

@Component({
  selector: 'map-component',
  templateUrl: './brug.component.html',
  styleUrls: ['./brug.component.css']
})

export class BrugComponent implements OnInit {
  mapView: MapView;
  map: any;
  location: Location;
  title: string;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.getLocationData()
      .then((data: Location[]) => {
        this.location = data[1];
        this.mapView = new MapView(google, this.location);
        this.map = this.mapView.map;
        this.title = this.location.title;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): void {
    console.error('An error occurred', error);
  }

}
