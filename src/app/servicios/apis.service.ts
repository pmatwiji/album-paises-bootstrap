import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  private countriesUrl = 'https://restcountries.eu/rest/v2/all';
  public countriesUrlEurope = 'https://restcountries.eu/rest/v2/region/europe';
  public countriesUrlAfrica = 'https://restcountries.eu/rest/v2/region/africa';
  public countriesUrlAmericas ='https://restcountries.eu/rest/v2/region/americas';
  public countriesUrlOceania ='https://restcountries.eu/rest/v2/region/oceania';
  public countriesUrlAsia = 'https://restcountries.eu/rest/v2/region/asia';

  constructor(private http: HttpClient) { }

  public obtenerListadoParametro(url){
    return this.http.get(url);
  }
  
  public obtenerTodoListado() {
    return this.http.get(this.countriesUrl);
  }

  public obtenerListadoEuropa() {
    return this.http.get(this.countriesUrlEurope);
  }
}
