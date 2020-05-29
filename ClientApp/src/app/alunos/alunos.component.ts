import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

 public alunos = [
    { nome: 'Ana' },
    { nome: 'Paula' },
    { nome: 'Laura' },
    { nome: 'Amanda' },
    { nome: 'Eduardo' },
    {nome: 'Lucas' },
    {nome: 'Mateus' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
