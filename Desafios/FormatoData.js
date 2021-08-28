function convertData (data){
    dia = data.substring(0,2)
    mes = parseInt(data.substring(3,5))
    meses = ['janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio','Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]
    ano = data.substring (6)
    console.log(`${dia} de ${meses[mes - 1]} de ${ano}`)

}

convertData('24/04/1983')

let nome = 'Paty'

//nome.substr ->>> para saber o que faz usa esta tag e passa o mouse