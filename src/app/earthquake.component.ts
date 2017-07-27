/*
* earthquake.component.ts
*/
import {Component, OnInit} from '@angular/core';
import {GoogleMap} from './google-map';
import {MapConfiguration} from './model/map-config.model';
import {MapConfigurationService} from './services/map-config.service';

import {EQ_DATA} from './mock-eq-data';

declare var google: any;

@Component({
  selector: 'earthquake-component',
  templateUrl: './earthquake.component.html',
  styleUrls: ['./earthquake.component.css']
})

export class EarthquakeComponent implements OnInit {
  googleMap: GoogleMap;
  map: any;
  mapConfig: MapConfiguration;
  title: string;

  constructor(private mapConfigService: MapConfigurationService) {}

  ngOnInit() {
    this.mapConfigService.getConfigurations()
      .then((data: MapConfiguration[]) => {
        this.mapConfig = data[0];
        this.googleMap = new GoogleMap(this.mapConfig);
        this.map = this.googleMap.map;
        this.title = this.mapConfig.title;

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
