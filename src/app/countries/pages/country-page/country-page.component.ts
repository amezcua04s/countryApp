import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import { switchMap } from 'rxjs';

import { CountriesService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor(
    private activatedRoute : ActivatedRoute,
    private countriesService : CountriesService,
    private router : Router,
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.countriesService.searchByAplhaCode( id ) )
      )
      .subscribe(  ( country ) => {
        if(!country) return this.router.navigateByUrl('');

        return this.country = country;
      });
  }
}
