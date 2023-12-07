const fs = require('fs')

function getTodosOsLivros() {
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const livroFiltrado = livros.filter(livro => livro.id == id)[0]
    return livroFiltrado
}

function inserirLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const novaListaLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
    const indiceElementoModificado = livrosAtuais.findIndex( livro => livro.id == id)

    const conteudoMudado = {...livrosAtuais[indiceElementoModificado], ...modificacoes}

    livrosAtuais[indiceElementoModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletarLivro(id){
    let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
    const indiceElementoModificado = livrosAtuais.findIndex( livro => livro.id == id)

    livrosAtuais.splice(indiceElementoModificado, 1)

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

module.exports = {
    getTodosOsLivros,
    getLivroPorId,
    inserirLivro, 
    modificaLivro,
    deletarLivro
}