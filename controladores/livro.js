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
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id);
            res.json(livro);
        } else {
            res.status(422).send("ID inválido");
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body;

        if (req.body.nome) {
            inserirLivro(livroNovo);
            res.status(201).send("Livro inserido com sucesso");
        } else {
            res.status(422).send("Nome vazio");
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

function patchLivro(req, res) {
    try {
        const livroNovo = req.body;
        const id = req.params.id

        if (id && Number(id)) {
            const livroModificado = modificaLivro(livroNovo, req.params.id);
            res.json(livroModificado);
        } else {
            res.status(422).send("ID inválido");
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const resultado = deletarLivro(req.params.id);
            res.json(resultado);
        } else {
            res.status(422).send("ID inválido");
        }

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
