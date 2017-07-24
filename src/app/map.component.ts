/*
* map.component.ts
*/
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {GoogleMap} from './google-map';

import {MapConfiguration} from './model/map-config.model';
import {MapConfigurationService} from './services/map-config.service';

declare var google: any;

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

  constructor(private mapConfigService: MapConfigurationService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      let id: number = parseInt(param.id);

      this.mapConfigService.getConfigurations()
        .then((data: MapConfiguration[]) => {
          this.mapConfig = data[id];
          this.googleMap = new GoogleMap(google, this.mapConfig);
          this.map = this.googleMap.map;
          this.title = this.mapConfig.title;
        })
        .catch(this.handleError);

    });
  }

  private handleError(error: any): void {
    console.error('An error occurred', error);
  }

}
