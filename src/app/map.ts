/*
* map.ts
*/
export class MapView {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
  google: any
  map: any;
  type: string;

  constructor(google: any) {
    this.google = google;
  }

  init() {
    if (!this.type) {
      this.type = this.google.maps.MapTypeId.ROADMAP;
    }
    const mapProp = {
      center: new this.google.maps.LatLng(this.lat, this.lng),
      zoom: this.zoom,
      mapTypeId: this.type
    };

    // init map
    this.map = new this.google.maps.Map(document.getElementById('map'), mapProp);
  }
}
