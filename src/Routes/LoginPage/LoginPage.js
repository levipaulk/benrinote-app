import React, {Component} from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';

class LoginPage extends Component {

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <div className='login-wrapper'>
        <header role='banner'>
          <h1>Login</h1>
        </header>
        <LoginForm 
          onLoginSuccess={this.handleLoginSuccess}
        />
      </div>
    )
  }
}
  
export default LoginPage;