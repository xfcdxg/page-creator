export default (
  ({ id, list }) => (
    <ul style={{ padding: '20px' }} key={ id }>
      { list.map(({ id, text }) => <li key={ id }>{ text }</li>) }
    </ul>
  )
)
