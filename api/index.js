const express = require('express')
const routes = require('./routes')
const passport = require('passport')
const cors = require ('cors')
require('./config/passport-jwt')()



const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize())


routes(app)

app.listen(3333, () => console.log('Servidor rodando na porta 3333'))