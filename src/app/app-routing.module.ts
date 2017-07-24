/*
* app-routing.module.ts
*/
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {EarthquakeComponent} from './earthquake.component';
import {MapComponent} from './map.component';

const routes: Routes = [
  {path: 'earthquakes', component: EarthquakeComponent},
  {path: 'map/:id', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}