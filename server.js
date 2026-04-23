const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve os arquivos estáticos (CSS, JS, Imagens) da pasta atual
app.use(express.static(__dirname));

// Rota principal para o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});