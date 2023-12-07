const { getTodosOsLivros, getLivroPorId, inserirLivro, modificaLivro, deletarLivro } = require('../servicos/livro');

function getLivros(req, res) {
    try {
        const livros = getTodosOsLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function getLivro(req, res) {
    try {
        const livro = getLivroPorId(req.params.id);
        res.json(livro);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body;
        inserirLivro(livroNovo);
        res.status(201).send("Livro inserido com sucesso");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function patchLivro(req, res) {
    try {
        const livroNovo = req.body;
        const livroModificado = modificaLivro(livroNovo, req.params.id);
        res.json(livroModificado);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deleteLivro(req, res) {
    try {
        const resultado = deletarLivro(req.params.id);
        res.json(resultado);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
};
