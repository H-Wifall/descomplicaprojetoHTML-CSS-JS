var x = 5;
var y = 4;
var z = 7;

//var resultado = 0; outra forma de fazer
//resultado = (x*2 + y*3 + z*5)/10;

var resultado = (x*2 + y*3 + z*5)/10;

console.log("A média das notas é: " + resultado);

var produto = 1000;
var valor = (produto) * 9/100;
//mesmos jeitos de fazer o calculo de 9%
//var valor = (produto * 9)/100;
//var valor = (produto) * 0.09;

var valorFinal = produto - valor;

console.log("Preço com desconto de 9%: " + "R$" + valorFinal)

var tempo = 3;
var velocidade = 80;
var distancia = tempo * velocidade;
var resultadoDaCorrida = distancia/12;
console.log("A velocidade média foi de: " + velocidade + " KM/h")
console.log("O tempo gasto de viagem foi de: " + tempo + " hora(s).")
console.log("A distância percorrida foi de " + distancia + " KM");
console.log("A quantidade de combustível ultilizada foi: " + resultadoDaCorrida + " litros.")
