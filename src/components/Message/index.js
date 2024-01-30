import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const text = isLoggedIn ? 'Please Login' : 'Welcome User'
  return <h1 className="heading">{text}</h1>
}
export default Message
