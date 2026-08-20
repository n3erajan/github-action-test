import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json('Welcome! this it test v1!')
})

app.listen(3000, () => {
  console.log('Server is running')
})
