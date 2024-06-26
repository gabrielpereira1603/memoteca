import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../pensamentos';
import { PensamentosService } from '../pensamentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
      conteudo: '',
      autoria: '',
      modelo: ''
  }

  constructor(
    private service: PensamentosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() =>{
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento(){
    alert("Pensamento cancelado")
  }
}
