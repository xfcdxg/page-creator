import Head from './head'
import Nav from './nav'

export default (
  ({ children }) => (
    <div>
      <Head />
      <Nav />
      <div>{ children }</div>
      <style jsx global>
        {`
          body {
            padding: 16px;
            margin: 0
          }
        `}
      </style>
    </div>
  )
)
