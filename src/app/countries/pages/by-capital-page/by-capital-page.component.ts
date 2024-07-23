import { Component, } from '@angular/core';
import { CountriesService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries : Country[] = [];

  constructor(private countrieService : CountriesService){}

  public searchByCapital(value : string) : void {
    this.countrieService.searchCapital( value )
      .subscribe( countries =>{
        this.countries = countries;
      } );
  }

}
