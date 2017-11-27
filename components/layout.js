import Link from 'next/link'

export default (
  ({ children }) => (
    <div>
      <div className='link-container'>
        <Link href='/'><a>Index</a></Link>
        <Link href='/page1'><a>Page1</a></Link>
        <Link href='/page2'><a>Page2</a></Link>
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
