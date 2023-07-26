var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

var numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
);
console.log(numerosFiltrados);

function buscarValores(valor){
    return valor < 5;
}

var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);

var r1 = numeros.filter((valor) =>{
    return valor > 7;
});

console.log(r1);
//abaixo se encontra o exemplo reducional do segundo var
var r2 = numeros.filter(valor => valor > 8);
console.log(r2);

var funcionarios =[
    {nome: "Luiz", Idade: 62, contrato: "Gerente"},
    {nome: "Davi", Idade: 22, contrato: "Gerente"},
    {nome: "Arthur", Idade: 18, contrato: "Atendente"},
    {nome: "Lucas", Idade: 40, contrato: "Analista"},
];

var pesssoasListagem = funcionarios.filter(
    function(valor){
        console.log(valor.nome);
        console.log(valor.nome.length <=4);
        return valor.nome.length < 5;
        
    });
console.log(pesssoasListagem);

var r3 = funcionarios.filter(
    function(valor){
        return valor.contrato == "Gerente"
    }
    );
console.log(r3, "R3");