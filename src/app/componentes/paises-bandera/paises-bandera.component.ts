import { Component, OnInit, Input } from '@angular/core';
import { ApisService } from '../../servicios/apis.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-paises-bandera',
  templateUrl: './paises-bandera.component.html',
  styleUrls: ['./paises-bandera.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class PaisesBanderaComponent implements OnInit {

  @Input() listaPaises:[];
  listaCompleta:any;
  paisSeleccionado: any;
  

  constructor(private apiService : ApisService,config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.apiService.obtenerTodoListado().subscribe((data:any) => {
      this.listaCompleta= data; 
      console.log(this.listaCompleta);     
    });
   }

  ngOnInit(): void {
  }

  open(content,pais) {
    this.modalService.open(content);
    this.paisSeleccionado = pais;
  }

}
