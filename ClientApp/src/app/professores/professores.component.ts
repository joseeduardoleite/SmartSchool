import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  
  public professorForm: FormGroup
  public titulo = 'Professores';
  public professorSelecionado: Professor;
  public textSimple: string;

  public professores = [
    { id: 1, nome: 'Pedro', disciplina: 'Matemática' },
    { id: 2, nome: 'Roberto', disciplina: 'Física' },
    { id: 3, nome: 'Rodrigo', disciplina: 'Português' },
    { id: 4, nome: 'Luiz', disciplina: 'Inglês' },
    { id: 5, nome: 'Francisco', disciplina: 'Programação' },
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm();
   }

  ngOnInit() {
  }

  criarForm() {
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  professorSubmit() {
    console.log(this.professorForm.value);
  }

  public professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  public voltar() {
    this.professorSelecionado = null;
  }

}
