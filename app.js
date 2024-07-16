const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.static('views'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Home', (req, res) => {
  res.sendFile(__dirname+'/views/Home.html')
})
app.get('/Contact', (req, res) => {
  res.sendFile(__dirname+'/views/Contact.html')
})
app.get('/About', (req, res) => {
  res.sendFile(__dirname+'/views/about.html')
})
app.get('/Home/Cake', (req, res) => {
  res.send('Hello Cake!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
