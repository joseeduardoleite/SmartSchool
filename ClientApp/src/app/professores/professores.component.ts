import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';
  public professorSelecionado: string;

  public professores = [
    { id: 1, nome: 'Pedro', disciplina: 'Matemática' },
    { id: 2, nome: 'Roberto', disciplina: 'Física' },
    { id: 3, nome: 'Rodrigo', disciplina: 'Português' },
    { id: 4, nome: 'Luiz', disciplina: 'Inglês' },
    { id: 5, nome: 'Francisco', disciplina: 'Programação' },
  ];

  public professorSelect(professor: any) {
    this.professorSelecionado = professor.nome;
  }

  public voltar() {
    this.professorSelecionado = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
