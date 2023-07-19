class Aluno {

    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
    
}

let sala = [];

sala.push(new Aluno("Rodrigo", 7));
sala.push(new Aluno("Pedro", 8));
sala.push(new Aluno("Alana", 5));
sala.push(new Aluno("Betânia", 3));
sala.push(new Aluno("Tereza", 10));

function filtraAlunosNaMedia(aluno) {
    return aluno.nota >= 6;
}

const alunosNaMedia = sala.filter(filtraAlunosNaMedia);

console.log(alunosNaMedia);