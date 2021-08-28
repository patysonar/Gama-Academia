// Será colocado as rotas

const express  = require('express')
const routes = express.Router()



//declarar variavel db titpo Banco  de Dados no tempo de execução
let db = [
    { '1': {Nome: 'Cliente 1', Idade: '20'}},
    { '2': {Nome: 'Cliente 2', Idade: '20'}},
    { '3': {Nome: 'Cliente 3', Idade: '20'}},

]

// Aqui as 4 operaçoes selecionar get, inserie post, modificar put e deleytar delite
// Obs: Colocado o config inteligente routers vai ficar nas rotas  / index nos servidores

//Buscar Dados o app.get era pq estava no index veio para o config virou routes.get
routes.get('/',(req, res) => {

    return res.json(db)
})

//Inserir dados
routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    db.push(body)    
    return res.json(body)

})

// no postaman vai fazer um get e passar o id para exclusão (http://localhost:21262/4)
routes.delete('/:id', (req, res)=> {

    const id =  req.params.id

    let newDB = db.filter(item => {  // essa linha é um array
           if (!item[id])
                return item

    })
    
    db = newDB
    return res.send(newDB)
})


module.exports = routes