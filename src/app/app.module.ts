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
import {GpxService} from './services/gpx.service';

import {AppComponent} from './app.component';
import {EarthquakeComponent} from './earthquake.component';
import {MapComponent} from './map.component';
import {TrackComponent} from './track.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    //    BsDropdownModule.forRoot(),
    //    AlertModule.forRoot()
  ],
  declarations: [AppComponent, EarthquakeComponent, MapComponent, TrackComponent],
  providers: [MapConfigurationService, FeatureService, GpxService],
  bootstrap: [AppComponent]
})


export class AppModule {}
