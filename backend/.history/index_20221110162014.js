const express = require('express')
const mongoconnect = require('./db')

const app = express()

const port = 5000

mongoconnect();
app.use(express.json())

app.use('/auth',require('./routes/User'));

app.listen(port, () => {
  console.log(`blog app listening on port http://localhost:${port}`)
})