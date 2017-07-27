import {Component, OnInit} from '@angular/core';

import {MapConfiguration} from './model/map-config.model';
import {MapConfigurationService} from './services/map-config.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  title: string = 'BMS 3, PoC - Google Maps API';
  menu = {};

  //  menu = {
  //    "menuItemList": [
  //      {"url": "/earthquakes", "name": "Earthquakes"},
  //      {"url": "/map/2", "name": "Schagerbrug"},
  //      {"url": "/map/3", "name": "Amsterdamsebrug"},
  //      {"url": "/map/4", "name": "Cruquiusbrug"},
  //    ]
  //    , "displayName": "Not logged in"
  //    , "authenticated": false
  //  };

  constructor(
    private mapConfigService: MapConfigurationService,
  ) {}

  ngOnInit() {
    // build a string holding the menu definition, partly static, mostly dynamic from services/map-configs.json
    let menuString: string = '{"menuItemList": [';
    this.mapConfigService.getConfigurations()
      .then((data: MapConfiguration[]) => {
        data.forEach(element => {
          let menuItem: string = '{"url": "/map/' + element.id + '", "name": "' + element.title + '"},';
          menuString += menuItem;
        });

        // remove last ',' to be able to call JSON.parse on the resultant string
        menuString = menuString.substring(0, menuString.length - 1);
        menuString += '], "displayName": "Not logged in", "authenticated": false}';
        this.menu = JSON.parse(menuString);
      })
      .catch(this.handleError);
  };

  private handleError(error: any): void {
    console.error('An error occurred', error);
  }

}
