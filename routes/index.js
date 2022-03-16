var express = require('express');
var router = express.Router();

const Autor = require("../models/autor");

/* Rota para autores */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.get('/insert', async function(req, res, next) {

  const autor = {
    nome: "Rafael",
    sobrenome: "Alves",
    data_nascimento: "08/14/2007"
  }
  const autores = await Autor.inserir(autor);
  res.json(autores.rows);
});

router.get('/update', async function(req, res, next) {

    const autor = {
    nome: "Pedro",
    sobrenome: "Alves",
    data_nascimento: "02/11/2003",
    id: "4"
  }
  const autores = await Autor.atualizar(autor);
  res.json(autores.rows);
});

router.get('/delete', async function(req, res, next) {

    const autor = {
    id: "5"
  }
  const autores = await Autor.deletar(autor);
  res.json(autores.rows);
});

module.exports = router;