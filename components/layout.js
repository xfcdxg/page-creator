import Link from 'next/link'

export default (
  ({ children }) => (
    <div>
      <div className='link-container'>
        <Link href='/'><a>Index</a></Link>
        <Link as={ `/page/1` } href={ `/?id=1` }><a>Page1</a></Link>
        <Link as={ `/page/2` } href={ `/?id=2` }><a>Page2</a></Link>
      </div>
      <div>{ children }</div>
      <style jsx>{`
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
