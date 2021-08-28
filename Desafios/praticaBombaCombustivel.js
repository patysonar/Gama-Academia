/// **** Exercicio feito pela professora Tainá


//caracteristicas / atributos
// ações // métodos

class BombaCombustivel{
    //atributos
    constructor(valorGasolina,capacidade){
        this.valorGasolina = valorGasolina
        this.capacidade = capacidade
        this.qtdGasolina = capacidade
    }
    
    
    // ***   metodos
    encherBombar(){
        if (this.qtdGasolina == this.capacidade){
            console.log('A bomba ta full')
        } else {
            this.qtdGasolina = this.capacidade
            console.log("Enchendo a bomba 3..2..1!")

        }

    }

    abastercerCarro(litros){
        if(this.qtdGasolina >= litros){
            this.qtdGasolina -= this.litros
            console.log('Abastecido com sucesso e vc vai pagar" ${litros*this.valorGasolina}')
        }else {
            console.log ('Não temos essa quantidade. so temos ${this.qtdGasolina}')
        }

    }

    ajustarvalor(novoValor){
        if (novoValor > 0 && typeof (novoValor) == 'number'){  //== verifica valor   e === verifica valor e tipo
            this.valorGasolina = novoValor;
        } else {
            console.log("Vai liberar de graça!!! huhuhull")

      }

    }
}

const bomba1 = new BombaCombustivel(10,50)

// console.log(bomba1.valorGasolina)

// // bomba1.ajustarvalor( -3)
// // console.log(bomba1.valorGasolina)


// bomba1.encherBombar()

bomba1.abastercerCarro(20)
bomba1.ajustarvalor(5)
bomba1.abastercerCarro(20)
bomba1.abastercerCarro(20)
bomba1.encherBombar()







