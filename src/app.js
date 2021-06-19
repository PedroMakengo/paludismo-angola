// Inicializando o meu server
const express = require("express")
const app = express()

// Usando os arquivos estáticos que encontram-se dentro da pasta public
app.use(express.static("public"))

// Inicializando o nunjucks 
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: app, 
    noCache: true
})

// Minhas rotas
function route(){
    // Criando as minhas rotas 
    app.get("/", function(req, res) {
        return res.render("index.html")  
    })

    app.get("/malaria", function(req, res) {
        return res.render("malaria.html")  
    })

    app.get("/mort", function(req, res) {
        return res.render("mort.html")
    })

    app.get("/regist", function(req, res) {
        return res.render("register.html")
    })
}
route()

// Rodando o meu servidor
app.listen(3000)