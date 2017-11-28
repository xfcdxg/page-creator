export default (
  ({ content }) => (
    <p>
      { content }
      <style jsx>{`
        p {
          padding: 20px;
          margin-bottom: 30px;
          border: 1px solid #d6d6d6;
        }
      `}</style>
    </p>
  )
)
