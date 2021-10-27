const express = require('express');


const app = express();

app.use(express.json())

const port = 5000 


app.get('/teste', (req,res)=> {
    res.status(200)
    res.send({mensagem : 'olá'})
})

app.listen(port, ()=> console.log(`servidor rodando na porta ${port}`))

module.exports = app