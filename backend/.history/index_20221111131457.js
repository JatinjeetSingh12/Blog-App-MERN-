const express = require('express')
const mongoconnect = require('./db')

const app = express()

const port = 5000

app.use(express.json())

mongoconnect();

app.use('/auth',require('./routes/User'));
app.use('/blog',require('./routes/Blog'));

app.listen(port, () => {
  console.log(`blog app listening on port http://localhost:${port}`)
})