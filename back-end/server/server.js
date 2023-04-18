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
  const services = JSON.parse(data);
  res.json(services);
});
app.get('/api/services/:id', (req, res) => {
  const { id } = req.params
  const data = fs.readFileSync('./public/services.json');
  const services = JSON.parse(data);
  const filter  = services.filter((service) => service.id === Number(id));
  res.json(filter[0]);
});
app.get('/api/clients', (req, res) => {
  const data = fs.readFileSync('./public/clients.json');
  const users = JSON.parse(data);
  res.json(users);
});
app.get('/api/clients/:id', (req, res) => {
  const { id } = req.params
  const data = fs.readFileSync('./public/clients.json');
  const clients = JSON.parse(data);
  const client  = clients.filter((service) => service.id === Number(id));
  res.json(client[0]);
});
app.get('/api/responsibles', (req, res) => {
  const data = fs.readFileSync('./public/responsibles.json');
  const responsibles = JSON.parse(data);
  res.json(responsibles);
});
app.get('/api/responsibles/:id', (req, res) => {
  const { id } = req.params
  const data = fs.readFileSync('./public/responsibles.json');
  const responsibles = JSON.parse(data);
  const responsible  = responsibles.filter((service) => service.id === Number(id));
  res.json(responsible[0]);
});
app.get('/api/products', (req, res) => {
  const data = fs.readFileSync('./public/products.json');
  const products = JSON.parse(data);
  res.json(products);
});

//POST's
app.post('/api/services', (req, res) => {
  const data = fs.readFileSync('./public/services.json');
  const services = JSON.parse(data);
  const newUser = req.body;
  services.push(newUser);
  fs.writeFileSync('./public/services.json', JSON.stringify(services));
  res.json(services);
});
app.post('/api/clients', (req, res) => {
  const data = fs.readFileSync('./public/clients.json');
  const clients = JSON.parse(data);
  const newClient = req.body;
  clients.push(newClient);
  fs.writeFileSync('./public/clients.json', JSON.stringify(clients));
  res.json(clients);
});

//PUT's
app.put('/api/services/:id', (req, res) => {
  const { id } = req.params;
  const data = fs.readFileSync('./public/services.json');
  const services = JSON.parse(data);
  const updatedService  = services.map((service) => {
    if (service.id === Number(id)) {
      return {
        ...service,
        status: 'Finalizado',
        finishedAt: new Date()
      }
    }
    return service
  });
  fs.writeFileSync('./public/services.json', JSON.stringify(updatedService));
  res.json(updatedService);
});

//LISTEN
app.listen(3001, () => {
  console.log('Servidor iniciado na porta 3001');
});