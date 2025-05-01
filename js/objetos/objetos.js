// Class é a definição do objeto
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

// Instância é a ocorrÊncia do objeto
const william = new Pessoa('William', 26);

console.log(william)