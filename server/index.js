const express = require('express')
const next = require('next')
const api = require('./api')

const PORT = 3001

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = api(express(), app).get('*', (req, res) => handle(req, res))

  if (!dev) server.use(express.static('out'))

  server.listen(PORT, () => {
    console.log('app run at: ', PORT)
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
