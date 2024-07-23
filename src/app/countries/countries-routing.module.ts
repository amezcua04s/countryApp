import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes : Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPageComponent
  },{
    path: 'by-country',
    component: ByCountryPageComponent
  },{
    path: 'by-region',
    component: ByRegionPageComponent
  },{ // Errores
    path: 'not-found',
    component : ErrorPageComponent
  },{
    path: 'by/:id',
    component: CountryPageComponent
  },{
    path: '**',
    redirectTo: 'by-capital'
  },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class CountriesRoutingModule { }
