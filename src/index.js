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
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))