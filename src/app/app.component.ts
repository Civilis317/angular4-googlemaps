import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MapComponent} from './map.component';
import {environment} from '../environments/environment';

RouterModule.forRoot([
  {
    path: 'map',
    component: MapComponent
  }
])

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  title: string = 'BMS 3, PoC - Google Maps API';

  constructor() {}

  ngOnInit() {
    let googlemapjs: string = 'https://maps.googleapis.com/maps/api/js?key=APIKEY';
    let script: any = document.createElement('script');

    // omit the following, to avoid: eferenceError: google is not defined at MapComponent.ngOnInit
    //script.async = true;
    //script.defer = true;

    console.log('APIKEY: ' + environment.apikey)

    script.src = googlemapjs.replace('APIKEY', environment.apikey);
    document.getElementsByTagName('head')[0].appendChild(script);
  }

}
