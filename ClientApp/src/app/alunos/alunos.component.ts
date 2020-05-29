import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

 public alunos = [
    { id: 1, nome: 'Ana', sobrenome: 'Júlia', telefone: 997452512 },
    { id: 2, nome: 'Paula', sobrenome: 'Fernandes', telefone: 999631568 },
    { id: 3, nome: 'Laura', sobrenome: 'Souza', telefone: 997578517 },
    { id: 4, nome: 'Amanda', sobrenome: 'Ferreira', telefone: 995658535 },
    { id: 5, nome: 'Eduardo', sobrenome: 'José', telefone: 997416134 },
    { id: 6, nome: 'Lucas', sobrenome: 'Alvares', telefone: 998341467 },
    { id: 7, nome: 'Mateus', sobrenome: 'Strinberg', telefone: 995172560 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
