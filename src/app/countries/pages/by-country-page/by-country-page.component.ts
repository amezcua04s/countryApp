import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/country-service.service';


@Component({
  selector: 'by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries : Country[] = [];

  constructor(private countrieService : CountriesService){}

  public searchCountry(value : string) : void {
    this.countrieService.searchCountry( value )
      .subscribe( countries =>{
        this.countries = countries;
      } );
  }

}

