import { inject, Injectable } from '@angular/core';
import { Deputado} from './deputado';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private http = inject(HttpClient)
  APIURL = 'http://dadosabertos.camara.leg.br/api/v2'

  private deputados: Deputado[] = [
  {
    id: 1,
    nome: "João Silva",
    siglaPartido: "PT",
    siglaUf: "SP",
    idLegislatura: 56,
    urlFoto: "https://example.com/foto/joao-silva.jpg",
    email: "joao.silva@camara.gov.br"
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    siglaPartido: "MDB",
    siglaUf: "RJ",
    idLegislatura: 56,
    urlFoto: "https://example.com/foto/maria-oliveira.jpg",
    email: "maria.oliveira@camara.gov.br"
  },
  {
    id: 3,
    nome: "Carlos Santos",
    siglaPartido: "PSDB",
    siglaUf: "MG",
    idLegislatura: 56,
    urlFoto: "https://example.com/foto/carlos-santos.jpg",
    email: "carlos.santos@camara.gov.br"
  },
  {
    id: 4,
    nome: "Ana Souza",
    siglaPartido: "PDT",
    siglaUf: "RS",
    idLegislatura: 56,
    urlFoto: "https://example.com/foto/ana-souza.jpg",
    email: "ana.souza@camara.gov.br"
  }
  ];
  
  obterDeputados(): Deputado[] {
    this.http.get(`${this.APIURL}`)
    return [...this.deputados]

  }
}
