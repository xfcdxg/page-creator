import dynamic from 'next/dynamic'

const requireComponent = (component) => {
  switch (component) {
    case 'title':
      return dynamic(import('../components/title'))
    case 'content':
      return dynamic(import('../components/content'))
    case 'list':
      return dynamic(import('../components/list'))
    default:
      return () => (<div></div>)
  }
}

export default (
  ({ component, props }, Component = requireComponent(component)) => (
    <Component { ...props } key={ props.id || '' } />
  )
)
