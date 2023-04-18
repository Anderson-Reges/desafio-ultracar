const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
app
  .use(express.json())
  .use(cors())

//GET's
app.get('/api/services', (req, res) => {
  const data = fs.readFileSync('./public/services.json');
  const users = JSON.parse(data);
  res.json(users);
});
app.get('/api/clients', (req, res) => {
  const data = fs.readFileSync('./public/clients.json');
  const users = JSON.parse(data);
  res.json(users);
});
app.get('/api/responsibles', (req, res) => {
  const data = fs.readFileSync('./public/responsibles.json');
  const users = JSON.parse(data);
  res.json(users);
});
app.get('/api/products', (req, res) => {
  const data = fs.readFileSync('./public/products.json');
  const users = JSON.parse(data);
  res.json(users);
});

//POST's
app.post('/api/services', (req, res) => {
  const data = fs.readFileSync('./public/services.json');
  const users = JSON.parse(data);
  const newUser = req.body;
  users.push(newUser);
  fs.writeFileSync('./public/services.json', JSON.stringify(users));
  res.json(users);
});

//LISTEN
app.listen(3001, () => {
  console.log('Servidor iniciado na porta 3001');
});