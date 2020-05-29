import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  public professores = [
    { nome: 'Pedro' },
    { nome: 'Roberto' },
    { nome: 'Rodrigo' },
    { nome: 'Luiz' },
    { nome: 'Francisco' },
    {nome: 'Cristiano' },
    {nome: 'Paulo' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
