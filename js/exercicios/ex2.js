/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas dever ter a capacidade de dizer o valor do ceu IMC = peso / (altura * altura))
    Instancie uma pessoa chamada Jose que tenha 70kg e 1,75 de altura e peça para José dizer seu IMC
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC(peso, altura){
        return peso / (altura * altura);
    }
}

const Jose = new Pessoa('Jose');

console.log(Jose.calculaIMC(70, 1.75));