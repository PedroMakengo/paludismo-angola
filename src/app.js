// Inicializando o meu server
const express = require("express")
const app = express()


app.use(express.static("public"))

// Inicializando o nunjucks 
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: app, 
    noCache: true
})

// Criando as minhas rotas 
app.get("/", function(req, res) {
    return res.render("index.html")  
})

app.get("/login", function(req, res) {
    return res.send("Login")  
})



// Rodando o meu servidor
app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
})