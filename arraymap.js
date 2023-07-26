var numeros = [1,2,3,4,5,6,7,8,9,10];

var nums = numeros.map(function(valor){
    return valor * 2;
});
console.log(nums);

var funcionarios =[
    {nome: "Luiz", idade: 62, contrato: "Gerente"},
    {nome: "Davi", idade: 22, contrato: "Gerente"},
    {nome: "Arthur", idade: 18, contrato: "Atendente"},
    {nome: "Lucas", idade: 40, contrato: "Analista"},
];

nomes = funcionarios.map(pessoa => pessoa.idade);
console.log(nomes);

var total = 0
for(var i = 0; i < numeros.length; i++){
    total += numeros[i]
};

console.log(total);

var tot = numeros.reduce(function(total,numero){
    return total + numero;
}, 0);

console.log(tot);