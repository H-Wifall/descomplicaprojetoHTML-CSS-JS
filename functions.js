function multiplicar(a,b){
    return a * b;
};
var x = multiplicar(2,3);
console.log(x);

function função(a,b=2,c=4){
    console.log(a + b + c);

}

função(2);

function teste(...args){
    const sum = args.reduce((accumulator, currentValue) => accumulator + currentValue);
    //const sum = args.reduce((todosEssesNumeros, someTodosPoisEssaTagNaoImporta) => todosEssesNumeros + someTodosPoisEssaTagNaoImporta);
    console.log(sum);
    console.log("Este(s) número(s) foram usado(s) no cálculo " + args);
};

teste(2,5,6,8,9);
