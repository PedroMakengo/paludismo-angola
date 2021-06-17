// Inicializando o meu server
const express = require("express")
const app = express()

// Inicializando o nunjucks 
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: app, 
    noCache: true
})

// Criando as minhas rotas 
app.get("/", function(req, res) {
    return res.send("Olá Mundo")  
})

app.get("/login", function(req, res) {
    return res.send("Login")  
})



// Rodando o meu servidor
app.listen(3000)