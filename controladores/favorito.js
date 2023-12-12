const { getTodosLivrosFavoritos, deletarLivroFavorito, inserirLivroFavorito } = require('../servicos/favorito');

function getLivrosFavoritos(req, res) {
    try {
        const livros = getTodosLivrosFavoritos();
        res.json(livros);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deleteLivroFavorito(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const resultado = deletarLivroFavorito(req.params.id);
            res.json(resultado);
        } else {
            res.status(422).send("ID inválido");
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

function postLivroFavorito(req, res) {
    const id = req.params.id
    try {
        inserirLivroFavorito(id);
        res.status(201).send("Livro inserido com sucesso");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getLivrosFavoritos,
    deleteLivroFavorito,
    postLivroFavorito
};
