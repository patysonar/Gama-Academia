/// **** Exercicio feito em sala


class Produtos{
    itens = []  // é um array
    //valorTotaldaCompra = 0

    adicionarItem(item){
      this.itens.push(item)
      //this.valorTotaldaCompra=this.valorTotaldaCompra


 }
}


const carrinhoDaLuiza = new Produtos() // objeto carrinho de compra
carrinhoDaLuiza.adicionarItem("caixa de leite")
carrinhoDaLuiza.adicionarItem("bolacha de chocolate")
carrinhoDaLuiza.adicionarItem("queijo")
carrinhoDaLuiza.adicionarItem("achocolatado")
carrinhoDaLuiza.adicionarItem("cafe")

console.log(carrinhoDaLuiza.itens)
//console.log(carrinhoDaLuiza.valorTotaldaCompra)


/////***************
