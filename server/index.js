const express = require('express')
const page = require('./page')
const page1 = require('./page1')
const page2 = require('./page2')

const app = express()


app.use(express.static('out'))

app.get('/api/page', (res, resp) => {
  resp.json(page)
})

app.get('/api/page1', (res, resp) => {
  resp.json(page1)
})

app.get('/api/page2', (res, resp) => {
  resp.json(page2)
})

app.listen(3001, () => {
  console.log('app run at: 3001')
})
