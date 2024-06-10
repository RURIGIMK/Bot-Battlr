// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const db = require('./db.json');

server.get('/bots', (req, res) => {
  res.json(db.bots);
});

server.post('/bots', (req, res) => {
  const newBot = req.body;
  db.bots.push(newBot);
  res.json(newBot);
});

server.delete('/bots/:id', (req, res) => {
  const id = req.params.id;
  db.bots = db.bots.filter((bot) => bot.id !== parseInt(id));
  res.json({ message: `Bot with id ${id} deleted` });
});

server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});
