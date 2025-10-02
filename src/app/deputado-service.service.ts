import { inject, Injectable } from '@angular/core';
import { Deputado} from './deputado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface RespostaApiDeputados {
  dados: any[];
  links: any[];
}


@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private http = inject(HttpClient);
  APIURL = 'https://dadosabertos.camara.leg.br/api/v2';
  private deputados: Deputado[] = [
   
  ];

  obterDeputados(): Observable<any>{
    return this.http.get(
      `${this.APIURL}/deputados?ordem=ASC&ordenarPor=nome`);
  }

  
  obterDeputadoPorNome(nome: string): Observable<RespostaApiDeputados> { 
    return this.http.get<RespostaApiDeputados>( 
      `${this.APIURL}/deputados?nome=${nome}&ordem=ASC&ordenarPor=nome`
    );
  }


  obterDespesasDeputado(idDep: number): Observable<any>{ 
    return this.http.get(`${this.APIURL}/deputados/${idDep}/despesas`);
  }
}