//var salário = 1500; descobrir por que a ordem dos elementos afeta o resultado
//console.log(salário + (salário *= 0.2))

var salário = 6000;
var percentual = 10;
var aumento = 0;
var salárioComAumento = 0;

aumento = salário * percentual/100;
salárioComAumento = salário + aumento;

console.log(aumento)
console.log("O salário com o reajuste é " + salárioComAumento + " pois o reajuste é de " + percentual + "%");

//var a = 10; a b e c não fazem sequencia neste algoritmo, pesquisar por que.
//var b = --a;
//var c = ++a +1;
//console.log(b)
//console.log(c)

var numero = 10;
var sucessor;
var antecessor;

sucessor = numero + 1;
antecessor = numero - 1;

console.log(antecessor, numero, sucessor);

//var carro = 20000
//var distribuidor = (carro * 28) / 100;
//var imposto = (carro * 45) / 100;

//console.log(carro + distribuidor + imposto)

var custoFabrica = 40000;
var porcDist;
var porcImps;
var custoFinal;

porcDist = custoFabrica * 28/100;
porcImps = custoFabrica * 45/100;
custoFinal = custoFabrica + porcDist + porcImps;
console.log("O custo final ao consumidor é " + custoFinal);


