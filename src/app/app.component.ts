import {Component, OnInit} from '@angular/core';

import {environment} from '../environments/environment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  title: string = 'BMS 3, PoC - Google Maps API';

  constructor() {}

  ngOnInit() {
    // add googlemaps api to index.html, apikey from environment
    let googlemapjs: string = 'https://maps.googleapis.com/maps/api/js?key=APIKEY';
    let script: any = document.createElement('script');
    script.src = googlemapjs.replace('APIKEY', environment.apikey);
    document.getElementsByTagName('head')[0].appendChild(script);
  }

}
