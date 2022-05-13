var todos = "valores armazenados";
console.log("a frase armezenada é \"" + todos + "\"");


var operador = 100;
var operando = 50;
var resultado = operador * operando;
console.log(resultado);


var nome = "giovanni";
var sobrenome = "zapparoli";
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);


var primeiroValor = 10;
var segundoValor = "3"; //string de número funciona nas operaçoes entre números
var resultado = primeiroValor - segundoValor;
console.log(resultado);


var nome = "Gio"
if (nome === "Gio") {
    console.log("Acertou!")
} else if (nome === "Zapparoli") {
    console.log("Serve!")
} else {
    console.log("Errou!")
}


var nome = "Zapparoli"
switch (nome){
    case "Gio":
        console.log("Acertou!");
        break;
    case "Zapparoli":
        console.log("Serve!");
        break;
    default: 
        console.log("Errou!");
        break;
}


var tabuada = 7;
for (var i = 0; i < 11; i++) {
    console.log("Valor de " + tabuada + " x " + i + " = " + tabuada * i);
}


var numeroSorteado = 10;
for (var i = 0; i < 100; i++) {
    if (numeroSorteado === i) {
        console.log("Seu número foi encontrado");
        break;
    }
}


var achou = false;
var possivelValor = 0;
var numeroSorteado = 10;
while (!achou)  {
    possivelValor += 1;
    if (numeroSorteado === possivelValor){
        achou = true;
    } else {
        console.log("Possível valor " + possivelValor + " não corresponde ao número sorteado.");
    }
}


function soma (a, b){
    var resultado = a + b;
    return resultado;
}
var resultadoDaSoma = soma(5,7);
console.log(resultadoDaSoma)
var resultadoDaSoma2 = soma(10,66);
console.log(resultadoDaSoma2)


function olaGama (nome){
    console.log("Olá Gama! Você é o " + nome + ".");
}
olaGama("Gio");

class matematica {
     soma(a, b){
        return a + b;
     }
     subtracao (a, b){
         return a - b;
     }
}
var instanciaMatematica = new matematica();
var resultado = instanciaMatematica.soma(4,7);
console.log(resultado);
var resultado = instanciaMatematica.subtracao(4,7);
console.log(resultado);