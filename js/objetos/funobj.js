class Pessoa{
    nome;
    idade;
    anoDeNasc;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNasc = 2025 - idade;
    }

    descrever(){
        console.log((`Meu nome é ${this.nome} e minha idade é ${this.idade}`));
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    }
    else if (p2.idade > p2.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    }
    else{
        console.log(`${p1.nome} tem a mesma idade ${p2.nome}`)
    }
}

const william = new Pessoa('William', 26);
const pedro = new Pessoa('Pedro', 21);

compararPessoas(william, pedro);