import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/country-service.service';

@Component({
  selector: 'by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries : Country[] = [];

  constructor(private countrieService : CountriesService){}

  public searchRegion(value : string) : void {
    this.countrieService.searchRegion( value )
      .subscribe( countries =>{
        this.countries = countries;
      } );
  }

}
