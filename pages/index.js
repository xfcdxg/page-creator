import { get } from 'mulan-lib'
import requireModules from '../lib/require-modules'
import Layout from '../components/layout'

const App = ({ config }) => (
  <Layout>
    { config.map(module => requireModules(module)) }
  </Layout>
)

App.getInitialProps = async ({ query }) => (
  await get(`http://localhost:3001/api/page/${ query.id || '0' }`)
)

export default App
