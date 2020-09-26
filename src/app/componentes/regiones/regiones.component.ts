import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApisService } from '../../servicios/apis.service';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {

  regionSeleccionada : string;
  urlApi: string;
  paisesRegion:any;

  asia : string;
  europa : string;
  america: string;
  africa: string;
  oceania: string;


  @Output() seleccionarRegionEvento = new EventEmitter();

  constructor(private apiService : ApisService) { 
    this.asia= apiService.countriesUrlAsia;
    this.africa = apiService.countriesUrlAfrica;
    this.europa = apiService.countriesUrlEurope;
    this.america = apiService.countriesUrlAmericas;
    this.oceania = apiService.countriesUrlOceania;
  }

  ngOnInit(): void {
  }

  seleccionarRegion(region:string,api:string){
    this.apiService.obtenerListadoParametro(api).subscribe((data:any) => {
      this.paisesRegion= data;      
    });
    this.regionSeleccionada=region;
    this.urlApi = api;
  }

  emitirEvento(region:any){
    this.seleccionarRegionEvento.emit(region);
  }




}
