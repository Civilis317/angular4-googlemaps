/*
* google-map.ts
*/
import {MapConfiguration} from './model/map-config.model';

declare var google: any;

export class GoogleMap {
  google: any;
  mapConfig: MapConfiguration;
  map: any;
  private trafficLayer: any;
  private transitLayer: any;
  private bikeLayer: any;

  constructor(config: MapConfiguration) {
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

  getSymbolPathCircle() {
    return this.google.maps.SymbolPath.CIRCLE;
  }

  toggleTraffic(toggle: boolean) {
    if (toggle) {
      if (!this.trafficLayer) {
        this.trafficLayer = new this.google.maps.TrafficLayer();
      }
      this.trafficLayer.setMap(this.map);
    } else {
      if (this.trafficLayer) {
        this.trafficLayer.setMap(null);
      }
    }
  }

  toggleTransit(toggle: boolean) {
    if (toggle) {
      if (!this.transitLayer) {
        this.transitLayer = new this.google.maps.TransitLayer();
      }
      this.transitLayer.setMap(this.map);
    } else {
      if (this.transitLayer) {
        this.transitLayer.setMap(null);
      }
    }
  }

  toggleBikeTraffic(toggle: boolean) {
    if (toggle) {
      if (!this.bikeLayer) {
        this.bikeLayer = new this.google.maps.BicyclingLayer();
      }
      this.bikeLayer.setMap(this.map);
    } else {
      if (this.bikeLayer) {
        this.bikeLayer.setMap(null);
      }
    }
  }

}
