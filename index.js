// print hello world

const express = require('express')
const app = express()
const port = 9020

app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.post('/comment', (req, res) => {
  console.log(req.body)
  res.json(req.body)
  console.log ("Hello" + " " + req.body.firstName + " " + req.body.lastName)
})

// making a different path in the same website
app.get('/welcome', (req, res) => {
    res.send('Welcome to the port')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})