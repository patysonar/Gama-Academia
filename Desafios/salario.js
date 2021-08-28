 
    
    // ***   Function  - Aluna Patricia  (Aula de Tainá - 21/08/2021)

    function calcularSalario(salario, novo, aumento){
     
        if (salario <= 280){
            aumento = salario *0.20;
            novo=salario+aumento
            console.log('Você recebeu 20% de aumento R$' +novo)

        } else if (salario <= 700){
            aumento = salario *0.15;
            novo=salario+aumento
            console.log('Você recebeu 15% de aumento R$' +novo)

        } else if (salario <= 1500){
            aumento = salario *0.10;
            novo=salario+aumento
            console.log('Você recebeu 10% de aumento R$' +novo)

        } else if (salario >= 1501){
             aumento = salario * 0.05;
             novo = salario + aumento
             console.log('Você recebeu  5% de aumento R$' +novo)
    }    
}

calcularSalario(150);
calcularSalario(300);
calcularSalario(900);
calcularSalario(3000);


