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

    calculaIMC(){
        return this.peso / (this.altura * this.altura);
    }

    classificacao(){
        let imc = this.calculaIMC();
        if(imc < 18.5 ){
            console.log("Você está abaixo do peso");
        }
        else if(imc <= 18.5 && imc < 25){
            console.log("Você está com peso normal")
        }
        else if(imc <= 25 && imc < 30){
            console.log("Você está com sobrepeso")
        }
        else{
            console.log("Você está com obesidade")
        }
    }
}

const William = new Pessoa('William', 90, 1.72);

console.log(William.classificacao());