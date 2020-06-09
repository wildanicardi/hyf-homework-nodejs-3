const express = require('express')
const app = express()
const port = 3000

const users = []
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req, res) => {
  res.json(users);
})
app.post('/user', (req, res) => {
  const data = users.push({
    id: 0
  });
  res.json(data);
})
app.get('/user/:id', (req, res) => {
  try {
    const data = users.find((data) => {
      data.id === req.params.id
      return data;
    });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
})
app.delete('/user/:id', (req, res) => {
  const data = users.find((data) => {
    data.id === req.params.id
    return data;
  });
  if (data) {
    users.splice(req.params.id, 1)
    res.sendStatus(202)
  } else {
    res.sendStatus(204)
  }

})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))