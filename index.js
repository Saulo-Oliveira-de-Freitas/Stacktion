const express = require('express')
const routes = require('./routes')
const passport = require('passport')
require('./config/passport-jwt')()
const app = express()
const cors = require('cors')

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(passport.initialize())

const port = 3333 ;

routes(app)

app.listen(port,()=> console.log(`servidor rodando na porta ${port}`))

module.exports = app