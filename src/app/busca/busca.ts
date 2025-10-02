import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


import { DeputadoService } from '../deputado-service.service';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [
    CommonModule,         
    ReactiveFormsModule    
  ],
  templateUrl: './busca.html', 
  styleUrls: ['./busca.css']   
})
export class Busca {


  private ds = inject(DeputadoService);
  private fb = inject(FormBuilder);

  
  buscaForm: FormGroup;
  resultados: any[] = [];
  buscaRealizada = false;

  constructor() {
   
    this.buscaForm = this.fb.group({
      
      nome: ['', [Validators.required, Validators.minLength(3)]]
    });
  }


  buscarDeputado(): void {
    this.buscaRealizada = true;
    this.resultados = []; 

   
    if (this.buscaForm.invalid) {
      return;
    }


    const nomeParaBusca = this.buscaForm.value.nome;

   
    this.ds.obterDeputadoPorNome(nomeParaBusca).subscribe(resposta => {
      this.resultados = resposta.dados;
    });
  }

  
  get nome() {
    return this.buscaForm.get('nome');
  }
}