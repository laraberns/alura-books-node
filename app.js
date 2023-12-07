const express = require("express")
const routerLivro = require("./rotas/livro")

const app = express()
app.use(express.json())

app.use("/livros", routerLivro)

const port = 8000
app.listen(port, () => {
    console.log("Servidor rodando");
})