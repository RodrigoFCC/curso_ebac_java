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



function media() {

    for (let i = 0; i < sala.length; i++){
        if (sala[i].nota >= 6) {
            console.log(`A nota de ${sala[i].nome} é ${sala[i].nota}`);
        } 
    }
}

media();