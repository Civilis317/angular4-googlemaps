import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // for ngModel!
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';

import {LocationService} from './services/location.service';
import {AppComponent} from './app.component';
import {MapComponent} from './map.component';
import {BrugComponent} from './brug.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, MapComponent, BrugComponent],
  providers: [LocationService],
  bootstrap: [AppComponent]
})


export class AppModule {}
