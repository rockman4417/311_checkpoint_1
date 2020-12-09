const express = require('express')
const app = express()
const users = require('./routes/users')
app.use(express.static('public'))
app.use(express.json())
app.use(users)
const port = process.env.PORT || 4001

app.get('/', (req, res) => res.send('default route'))




app.listen(port, () => {
  console.log('app is listening on:', port)
})