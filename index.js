//external dependencies
const express = require('express');
const basicAuth = require('express-basic-auth')

//local dependencies
const file = require('./lib/file');
const converter = require('./lib/converter');

//configuration
const app = express();
const port = 3000

//basic auth
app.use(basicAuth({
  users: {
    'usuarioA@gmail.com': '1234567890',
    'usuarioB@gmail.com': '1234567890',
    'usuarioC@gmail.com': '1234567890',
    'usuarioA@hotmail.com': '1234567890',
    'usuarioB@hotmail.com': '1234567890',
    'usuarioB@yahoo.com': '1234567890',
  },
  unauthorizedResponse: (req) => {
    return req.auth ? 'unauthorized' : 'empty credentials'
  }
}))

app.get('/', (req, res) => {
  res.send("ok")
})

app.get('/data', (req, res) => {
  const data = file.LoadFromLocal()
  const dataJSON = converter.FromYaml2JSON(data)
  res.json(dataJSON);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})