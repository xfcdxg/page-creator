import dynamic from 'next/dynamic'
import { get, setServerUrl } from 'mulan-lib'
import Layout from '../components/layout'

const requireComponent = ({ component, props }) => {

  switch (component) {
    case 'title':
      const Title = dynamic(import('../components/title'))
      return <Title { ...props } key={ props.id || '' } />

    case 'content':
      const Content = dynamic(import('../components/content'))
      return <Content { ...props } key={ props.id || '' } />

    case 'list':
      const List = dynamic(import('../components/list'))
      return <List { ...props } key={ props.id || '' } />

    default: break
  }
}

const App = ({ config }) => {
  return (
    <Layout>
      {
        config.map(module => requireComponent(module))
      }
    </Layout>
  )
}

App.getInitialProps = async function({ req, query }) {
  console.log(query)
  const { id } = query
  return await get(`http://localhost:3001/api/page/${ id || '0' }`)
}



export default App
