import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../servicios/apis.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  listaPaises: any;
  listaPaisesPorRegion: any;

  constructor(private apiService : ApisService) {
    this.apiService.obtenerTodoListado().subscribe((data:any) => {
      this.listaPaises= data;      
    });
    
   }

  ngOnInit(): void {
  }

  filtrarRegion(region:any){
    this.listaPaisesPorRegion = this.listaPaises.filter(pais => pais.region == region);
  }

}
