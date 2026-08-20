import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json('Welcome! this it test v2!')
})

app.get('/*splat', (req, res) => {
  res.send(`<h1> Your IP address is: ${req.ip}</h1> `)
})

app.listen(3000, () => {
  console.log('Server is running')
})
