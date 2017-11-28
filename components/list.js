export default (
  ({ id, list }) => (
    <ul key={ id }>
      { list.map(({ id, text }) => <li key={ id }>{ text }</li>) }
      <style jsx>
        {`
          ul {
            padding: 0;
            margin: 0;
            padding-left: 20px;
            margin-bottom: 30px;
            border-left: 5px solid #41b0ff;
          }
          ul li {
            list-style: none;
            margin-bottom: 12px;
          }
        `}
      </style>
    </ul>
  )
)
