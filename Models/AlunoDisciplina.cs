namespace SmartSchool.Models
{
    public class AlunoDisciplina
    {
        public int AlunoId { get; set; }
        public virtual Aluno Aluno { get; set; }
        public int DisciplinaId { get; set; }
        public virtual Disciplina Disciplina { get; set; }

        public AlunoDisciplina() { }

        public AlunoDisciplina(int alunoId, int disciplinaId)
        {
            this.AlunoId = alunoId;
            this.DisciplinaId = disciplinaId;
        }
    }
}