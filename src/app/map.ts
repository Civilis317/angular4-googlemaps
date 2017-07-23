/*
* map.ts
*/
import {Location} from './model/location.model';

export class MapView {
  google: any;
  location: Location;
  map: any;

  constructor(google: any, location: Location) {
    this.google = google;
    this.location = location;
    this.init();
  }

  private init() {
    let type;
    if (!this.location.type) {
      type = this.google.maps.MapTypeId.ROADMAP;
    }
    const mapProp = {
      center: new this.google.maps.LatLng(this.location.lat, this.location.lng),
      zoom: this.location.zoom,
      mapTypeId: type
    };

    // init map
    this.map = new this.google.maps.Map(document.getElementById('map'), mapProp);
  }
}
