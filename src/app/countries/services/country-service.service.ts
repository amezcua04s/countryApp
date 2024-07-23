import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn : 'root'})
export class CountriesService {

  private apiUrl : string = 'https://restcountries.com/v3.1'

  public cacheStore : CacheStore = {

    byCapital:   { query: '', countries : [] },
    byCountries: { query: '', countries : []},
    byRegion:    { region: '', countries : []},

  }

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  private saveLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify( this.cacheStore ));
  }

  private loadLocalStorage(){
    if ( !localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')!);
  }

  private getCountriesQuery(url : string) : Observable<Country[]>{
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([ ]) ),
        delay(1421),
      );
  }

  public searchByAplhaCode( code : string ) : Observable<Country | null> {
    const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError(error => of( null ) )
      );
  }

  public searchCapital( query : string ) : Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ query }`;
    return this.getCountriesQuery(url)
      .pipe(
        tap( countries => this.cacheStore.byCapital = {query , countries} ),
        tap ( () => this.saveLocalStorage()),
      );
  }

  public searchCountry( query : string ) : Observable<Country[]> {
    const url = `${ this.apiUrl }/translation/${ query }`;
    return this.getCountriesQuery(url)
      .pipe(
        tap(countries => this.cacheStore.byCountries = {query, countries}),
        tap ( () => this.saveLocalStorage()),
      );
  }

  public searchRegion( region : Region ) : Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.getCountriesQuery(url)
      .pipe(
        tap(countries => this.cacheStore.byRegion = {region, countries}),
        tap ( () => this.saveLocalStorage()),
      );
  }
}
