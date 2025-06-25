const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DB_PATH = path.join(__dirname, 'RISKdb.json');

app.use(cors());
app.use(express.json());

// Função para ler usuários do arquivo
function lerUsuarios() {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Função para salvar usuários no arquivo
function salvarUsuarios(usuarios) {
  fs.writeFileSync(DB_PATH, JSON.stringify(usuarios, null, 2), 'utf8');
}

// GET lista de usuários
app.get('/usuario', (req, res) => {
  const usuarios = lerUsuarios();
  res.json(usuarios);
});

// POST criar usuário
app.post('/usuario', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Usuário, email e senha são obrigatórios' });
  }

  const usuarios = lerUsuarios();
  const existeUsuario = usuarios.find(u => u.username === username);
  const existeEmail = usuarios.find(u => u.email === email);

  if (existeUsuario) {
    return res.status(409).json({ error: 'Usuário já existe' });
  }
  if (existeEmail) {
    return res.status(409).json({ error: 'Email já cadastrado' });
  }

  usuarios.push({ username, email, password });
  salvarUsuarios(usuarios);

  res.status(201).json({ message: 'Usuário criado com sucesso' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://192.168.0.19:${PORT}`);
});
