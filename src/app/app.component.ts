import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title: string = 'BMS 3, PoC - Google Maps API';

  menu = {
    "menuItemList": [
      {"url": "/earthquakes", "name": "Earthquakes"}
      , {"url": "/map/1", "name": "Schagerbrug"}
      , {"url": "/map/2", "name": "Amsterdamsebrug"}]
    , "displayName": "Not logged in"
    , "authenticated": false
  };

  menujson = JSON.stringify(this.menu.menuItemList);

}
