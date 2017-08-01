/*
* map.component.ts
*/
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {GoogleMap} from './google-map';

import {MapConfiguration} from './model/map-config.model';
import {MapConfigurationService} from './services/map-config.service';
import {FeatureService} from './services/feature.service';


@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  googleMap: GoogleMap;
  map: any;
  mapConfig: MapConfiguration;
  title: string;
  showTraffic: boolean;
  showTransit: boolean;
  showBikeTraffic: boolean;

  constructor(
    private featureService: FeatureService,
    private mapConfigService: MapConfigurationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      this.showTraffic = false;
      let id: number = parseInt(param.id);

      this.mapConfigService.getMapConfiguration(id)
        .then((data: MapConfiguration) => {
          this.mapConfig = data;
          this.googleMap = new GoogleMap(this.mapConfig);
          this.map = this.googleMap.map;
          this.title = this.mapConfig.title;
        })
        .catch(this.handleError);
    });
  }

  private handleError(error: any): void {
    console.error('An error occurred', error);
  }

  toggleTraffic(): void {
    this.showTraffic = !this.showTraffic;
    this.googleMap.toggleTraffic(this.showTraffic);
  }

  toggleTransit(): void {
    this.showTransit = !this.showTransit;
    this.googleMap.toggleTransit(this.showTransit);
  }

  toggleBikeTraffic(): void {
    this.showBikeTraffic = !this.showBikeTraffic;
    this.googleMap.toggleBikeTraffic(this.showBikeTraffic);
  }

  showFeatures(): void {
    let features: any;
    this.featureService.getShipData()
      .then((data: any) => {
        features = data;

        this.map.data.setStyle(this.setFeature);
        this.map.data.addGeoJson(features);
      })
  }

  setFeature(feature: any) {
    return {icon: './sailing.png'};
  }


}
