const express = require('express')
const app = express()


app.listen(3000)
console.log('Servidor rodando na porta 3000')


app.use(express.json())


let nome = "Leandro"


app.route('/').get( (req,res) => {
    res.send(nome)
})

app.route('/post').post( (req,res) => res.send(req.body) )

app.route('/put').put( (req,res) => {
    nome = req.body.nome
    res.send(nome)
})

app.route('/:id').delete( (req,res) => {
    res.send(req.params.id)
})
