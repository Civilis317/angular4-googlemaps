/*
* map.ts
*/
import {MapConfiguration} from './model/map-config.model';

export class GoogleMap {
  google: any;
  mapConfig: MapConfiguration;
  map: any;

  constructor(google: any, config: MapConfiguration) {
    this.google = google;
    this.mapConfig = config;
    this.init();
  }

  private init() {
    let type;
    if (!this.mapConfig.type) {
      type = this.google.maps.MapTypeId.ROADMAP;
    }
    const mapProp = {
      center: new this.google.maps.LatLng(this.mapConfig.lat, this.mapConfig.lng),
      zoom: this.mapConfig.zoom,
      mapTypeId: type
    };

    // init map
    this.map = new this.google.maps.Map(document.getElementById('map'), mapProp);
  }
}
