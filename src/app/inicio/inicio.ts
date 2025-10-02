import { Component, inject } from '@angular/core';
import { Deputado } from '../deputado';
import { DeputadoService } from '../deputado-service.service';


@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  deputados: Deputado[]= []
  private ds = inject(DeputadoService)


  constructor(){
    this.ds.obterDeputados().subscribe(
        res => {
          this.deputados = res.dados
        }
    )
  }

}
