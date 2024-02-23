const express = require('express')
const app = express()

app.listen(3000)
console.log('Server rodando na porta 3000')

app.route('/').get((req,res)=>{
    res.send('Whazzaaap')
})