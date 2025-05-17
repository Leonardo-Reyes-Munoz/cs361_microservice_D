const express = require('express');
const app = express();
const port = 3030;

//routers
const debtRouter = require('./routes/users');

app.get('/', (req, res) => {
  res.send('Microservice D');
});

app.use('/api/v1/users', debtRouter);

app.listen(port, () => {
  console.log('Microservice D listening on port 3030...');
});
