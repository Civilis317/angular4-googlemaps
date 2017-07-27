import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // for ngModel!
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

//import {BsDropdownModule} from 'ngx-bootstrap';
//import {AlertModule} from 'ngx-bootstrap';

import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';

import {MapConfigurationService} from './services/map-config.service';
import {FeatureService} from './services/feature.service';
import {AppComponent} from './app.component';
import {EarthquakeComponent} from './earthquake.component';
import {MapComponent} from './map.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    //    BsDropdownModule.forRoot(),
    //    AlertModule.forRoot()
  ],
  declarations: [AppComponent, EarthquakeComponent, MapComponent],
  providers: [MapConfigurationService, FeatureService],
  bootstrap: [AppComponent]
})


export class AppModule {}
