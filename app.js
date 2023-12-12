const express = require("express")
const routerLivro = require("./rotas/livro")
const routerFavorito = require("./rotas/favorito")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use("/livros", routerLivro)
app.use("/favoritos", routerFavorito)
app.use('/assets', express.static('assets/'));


const port = 8000
app.listen(port, () => {
    console.log("Servidor rodando");
})