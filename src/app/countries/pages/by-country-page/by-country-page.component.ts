import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/country-service.service';


@Component({
  selector: 'by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public countries    : Country[] = [];
  public initialValue : string    = '';
  public isLoading    : boolean   = false

  constructor(private countrieService : CountriesService){}

  ngOnInit(): void {
    this.countries    = this.countrieService.cacheStore.byCountries.countries;
    this.initialValue = this.countrieService.cacheStore.byCountries.query;
  }

  public searchCountry(value : string) : void {
    this.isLoading=true;
    this.countrieService.searchCountry( value )
      .subscribe( countries =>{
        this.countries = countries;
        this.isLoading = false;
      } );
  }

}


