const page = require('./assets/page')
const page1 = require('./assets/page1')
const page2 = require('./assets/page2')

module.exports = (server, app) => (
  server
  .get('/page/:id', (res, resp) => {
    const actualPage = '/'
    const query = { id: res.params.id }
    app.render(res, resp, actualPage, query)
  })
  .get('/api/page/:id', (res, resp) => {
    switch (res.params.id) {
      case '1': resp.json(page1); break
      case '2': resp.json(page2); break
      default: resp.json(page); break
    }
  })
)
