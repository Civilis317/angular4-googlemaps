/*
* app-routing.module.ts
*/
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {MapComponent} from './map.component';
import {BrugComponent} from './brug.component';

const routes: Routes = [
  {path: 'map', component: MapComponent},
  {path: 'brug/:id', component: BrugComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}