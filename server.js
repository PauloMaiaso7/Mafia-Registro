const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/mafia-registro', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexão com o MongoDB estabelecida'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Definição do modelo de registro de vendas
const SaleRecord = mongoose.model('SaleRecord', {
  vendedor: String,
  mercadoria: String,
  quantidade: Number,
  preco: Number
});

// Middleware para análise de corpos JSON
app.use(express.json());

// Rota para registrar uma nova venda
app.post('/api/vendas', async (req, res) => {
  try {
    const { vendedor, mercadoria, quantidade, preco } = req.body;
    const novaVenda = new SaleRecord({ vendedor, mercadoria, quantidade, preco });
    await novaVenda.save();
    res.status(201).send('Venda registrada com sucesso.');
  } catch (err) {
    console.error('Erro ao registrar venda:', err);
    res.status(500).send('Erro ao registrar venda.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
