//http://dontpad.com/aumentoSalario

function reajusteSalarial(salarioAtual) {
    let percentualReajuste; 

    if(salarioAtual <= 280){
        percentualReajuste = 0.2;
        
    
    } else if(salarioAtual <= 700) {
        percentualReajuste = 0.15;
        
    } else if(salarioAtual <= 1500) {
        percentualReajuste = 0.1;
        
    } else {
        percentualReajuste = 0.05;
    }

    let valorAumento = salarioAtual * percentualReajuste;
    

    console.log(
    `Salário atual: ${salarioAtual}, 
    percentual de aumento aplicado: ${percentualReajuste*100}%,
    valor do aumento: ${valorAumento}
    novo salário: ${salarioAtual + valorAumento}.`
    );
}


reajusteSalarial(150);
reajusteSalarial(300);
reajusteSalarial(900);
reajusteSalarial(2000);


