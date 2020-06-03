using System.Collections.Generic;

namespace SmartSchool.Models
{
    public class Disciplina
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int ProfessorId { get; set; }
        public virtual Professor Professor { get; set; }
        public virtual IEnumerable<AlunoDisciplina> AlunoDisciplinas { get; set; }

        public Disciplina() { }

        public Disciplina(int id, string nome, int professorId)
        {
            this.Id = id;
            this.Nome = nome;
            this.ProfessorId = professorId;

        }
    }
}