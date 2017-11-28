import Link from 'next/link'
import Head from 'next/head'

export default (
  ({ children }) => (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1" />
      </Head>
      <div className='link-container'>
        <Link href='/'><a>Index</a></Link>
        <Link as={ `/page/1` } href={ `/?id=1` }><a>Page1</a></Link>
        <Link as={ `/page/2` } href={ `/?id=2` }><a>Page2</a></Link>
      </div>
      <div>{ children }</div>
      <style jsx global>{`
        body {
          padding: 16px;
          margin: 0
        }
        a {
          color: blue;
          margin-right: 10px
        }
        .link-container {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  )
)
