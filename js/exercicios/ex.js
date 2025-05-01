/*
    1- Crie uma classe para representar carros.
    OS carros possuem uma marca uma cor e um gasto médio de combustível por KM rodado
    Crie um método que dado a quantidade de km e o preço do combustível nos de o valor gasto em reais para realizar este percurso
*/

class Carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularViagem(km, valorGas ){
       return km * this.gastoMedio * valorGas;
    }
}


const uno = new Carro('fiat', 'Vermelho', 1/12);
const camaro = new Carro('Chevrolet', 'amarelo', 1/4)

console.log(uno.calcularViagem(40, 5));
console.log(camaro.calcularViagem(40,5))
