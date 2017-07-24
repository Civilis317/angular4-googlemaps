import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // for ngModel!
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';

import {MapConfigurationService} from './services/map-config.service';
import {AppComponent} from './app.component';
import {EarthquakeComponent} from './earthquake.component';
import {MapComponent} from './map.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, EarthquakeComponent, MapComponent],
  providers: [MapConfigurationService],
  bootstrap: [AppComponent]
})


export class AppModule {}
