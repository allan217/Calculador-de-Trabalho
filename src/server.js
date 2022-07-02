const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

//usando template engine
server.set('view engine', 'ejs')

// Mudar a localizacao da pasta views
server.set('views', path.join(__dirname, 'views'))

// habilitar arquivos staticos
server.use(express.static("public"))

// Usar o req.body
server.use(express.urlencoded({extended: true}))

// routes

server.use(routes)

server.listen(3000)