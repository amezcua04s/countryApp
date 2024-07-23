import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/country-service.service';

import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type'

@Component({
  selector: 'by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{

  public countries       : Country[] = [];
  public regions         : Region[]  =  ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  public selectedRegion? : Region ;
  public isLoading       : boolean   = false

  constructor(private countrieService : CountriesService){}

  ngOnInit(): void {
    this.countries      = this.countrieService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countrieService.cacheStore.byRegion.region;
  }

  public searchRegion(region : Region) : void {
    this.isLoading = true;
    this.selectedRegion = region;

    this.countrieService.searchRegion( region )
      .subscribe( countries =>{
        this.isLoading=false;
        this.countries = countries;
      } );
  }

}
