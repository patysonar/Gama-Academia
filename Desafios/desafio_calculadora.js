

// Função que soma dois valores
function somarValores(valor,valor1){
    console.log("Função Soma!")
    var  resultadoC = valor + valor1;
    return resultadoC;
}

var ResultadoDaSoma = somarValores (1,2);
console.log(ResultadoDaSoma);

// Função que subtrai o segundo valor do primeiro
function subtrairValores(valor,valor1){
    console.log("Função subtração!")
    var  resultadoC = valor - valor1;
    return resultadoC;
}
var ResultadoDaSubtracao = subtrairValores (8,2);
console.log(ResultadoDaSubtracao);


// Função que multiplica dois valores
 function multiplicarValores(valor,valor1){
     console.log("Função muliplicação!")
    var  resultadoC = valor * valor1;
    return resultadoC;
}
var ResultadoDaMultiplicação = multiplicarValores (10,2);
console.log(ResultadoDaMultiplicação);


// Função que divide o primeiro valor pelo segundo
function dividirValores(valor, valor1){
    console.log("Função Divisão!")
    
    if(valor == 0){
        return "Erro, divisão por zero!";
    }else{
        return valor / valor1;
    }
}
var ResultadoDaDivisao = dividirValores (8,2);
console.log(ResultadoDaDivisao);