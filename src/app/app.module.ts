import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // for ngModel!
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MapComponent} from './map.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    {
      path: 'map',
      component: MapComponent
    }
  ])
  ],
  declarations: [AppComponent, MapComponent],
  bootstrap: [AppComponent]
})


export class AppModule {



}
