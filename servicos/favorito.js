const fs = require('fs')

function getTodosLivrosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'))
}

function deletarLivroFavorito(id){
    let livrosAtuais = JSON.parse(fs.readFileSync('favoritos.json'))
    const indiceElementoModificado = livrosAtuais.findIndex( livro => livro.id == id)

    livrosAtuais.splice(indiceElementoModificado, 1)

    fs.writeFileSync("favoritos.json", JSON.stringify(livrosAtuais))
}

function inserirLivroFavorito(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'));
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'));

    const livroInserido = livros.find(livro => livro.id === id);

    if (!livroInserido) {
        console.error('Livro não encontrado.');
        return;
    }

    const livroExistente = favoritos.find(favorito => favorito.id === id);

    if (livroExistente) {
        console.error('Livro já está nos favoritos.');
        return;
    }

    const novaListaDeFavoritos = [...favoritos, livroInserido];

    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaDeFavoritos));
}

module.exports = {
    getTodosLivrosFavoritos,
    deletarLivroFavorito,
    inserirLivroFavorito
}