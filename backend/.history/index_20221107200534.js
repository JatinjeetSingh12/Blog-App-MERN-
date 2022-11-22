const express = require('express')
const mongoconnect = require('./db')

const app = express()
const port = 5000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`blog app listening on port http://localhost:${port}`)
})