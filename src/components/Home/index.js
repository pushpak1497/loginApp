// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: true}

  onClicked = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <div className="bg-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Login login={this.onClicked} />
          ) : (
            <Logout logout={this.onClicked} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
