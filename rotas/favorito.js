const { Router } = require('express')
const { getLivrosFavoritos,
    deleteLivroFavorito,
    postLivroFavorito } = require('../controladores/favorito')

const router = Router()

router.get("/", getLivrosFavoritos)

router.post("/:id", postLivroFavorito)

router.delete("/:id", deleteLivroFavorito)

module.exports = router