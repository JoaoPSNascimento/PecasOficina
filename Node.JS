const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('formulario');
});

app.post('/', (req, res) => {
  const nomePeca = req.body.nomePeca;
  const nomeVeiculo = req.body.nomeVeiculo;
  const anoModelo = req.body.anoModelo;
  const codigoPeca = req.body.codigoPeca;
  const valorPeca = req.body.valorPeca;
  const descricaoPeca = req.body.descricaoPeca;

  // aqui você pode fazer o que quiser com as informações recebidas do formulário
  // por exemplo, salvar em um banco de dados

  res.send('Formulário enviado com sucesso!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});