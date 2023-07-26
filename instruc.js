var pais = "Brasil";

if(pais != "Brasil"){
    console.log("Você é estrangeiro.")
}else{
    console.log("Você é brasileiro")
}

var idade = 22;

if(idade < 16){
    console.log("Não Vota")
}else if(idade < 18 || idade > 65){
    console.log("voto opcional")
}else{
    console.log("Voto obrigatório")
}

//vai executar até achar a condição do diaSem, caso não ache, vai para o default.
var diaSem = 9;

switch(diaSem){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido")
}

var carro = [{modelo: "Audi A3", marca: "Audi", ano: 2020},
            {modelo: "Compass", marca: "Jeep", ano: 2021}]

for (let caracteristica in carro){
    console.log(carro[caracteristica])
}

for (let c of carro){
    console.log(c.ano)
    }

//vai executar somente se a condição for verdadeira
var c = 1;
while (c <= 10){
    console.log(c);
    c ++;
}

//sempre vai executar pelo menos uma vez, idependente se a condição for verdadeira
var t = 1;
do{
    console.log(t);
    t++
 }while(t < 100)
