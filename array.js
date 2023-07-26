var valores = [8,1,7,2,9];

console.log(valores.length);

var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW","Yamaha","Honda");

var media = soma/valores.length;
console.log(media);
console.log(valores.length);

console.log("Array Invertido " + valores.reverse());

var arr1 = [1,2,3,4,5,6];

console.log(arr1.join('-'));

var retirado = arr1.shift();
console.log(retirado, "retirado do arr1");

console.log("posição do numero 3: " + arr1.indexOf(3));

arr1.push(7,8);

console.log(arr1);

arr1.pop();

console.log(arr1, "arr1");

var ar = [-5,10,15,20,-3,89];
//verificar como remover números negativos
console.log(ar, "ar")

var positive = ar.filter(
    function(valor){
        return valor > 0
    });
console.log(positive, "positivo")

var arr2 = [1,2,3,4,5,6,7];

arr2.splice(2,3)

console.log(arr2, "arr2")

var nomes = ["Maria", "João", "Pedro"];
var novos = nomes.splice(1,2,"Luiz","Ronaldo");

console.log(nomes, "var de nomes");

var pais = ["Brasil", "Argentina", "Colombia"];

pais.unshift("Uruguai");
pais.push("Bolívia");
var rival = pais.indexOf("Argentina");

console.log(rival, "var de rival")
console.log(pais, "var de pais")

//for (var pos = 0 ; pos < valores.length; pos++){
//    console.log("Posição:  " + pos + " Valor: " + valores[pos])
//}

var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
var gerente = ["Davi","Emanuela"];
var pessoas1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente);

console.log(empresa);