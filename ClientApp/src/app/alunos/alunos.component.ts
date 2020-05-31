import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

 public alunos = [
    { id: 1, nome: 'Ana', sobrenome: 'Júlia', telefone: 997452512 },
    { id: 2, nome: 'Paula', sobrenome: 'Fernandes', telefone: 999631568 },
    { id: 3, nome: 'Laura', sobrenome: 'Souza', telefone: 997578517 },
    { id: 4, nome: 'Amanda', sobrenome: 'Ferreira', telefone: 995658535 },
    { id: 5, nome: 'Eduardo', sobrenome: 'José', telefone: 997416134 },
    { id: 6, nome: 'Lucas', sobrenome: 'Alvares', telefone: 998341467 },
    { id: 7, nome: 'Mateus', sobrenome: 'Strinberg', telefone: 995172560 },
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm();
   }

  ngOnInit() {
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }

}
