import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // for ngModel!
import {RouterModule} from '@angular/router';

import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MapComponent} from './map.component';
import {BrugComponent} from './brug.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, MapComponent, BrugComponent],
  bootstrap: [AppComponent]
})


export class AppModule {}
