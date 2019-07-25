import React, {Component} from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';

class LoginPage extends Component {

  // static defaultProps = {
  //   location: {},
  //   history: {
  //     push: () => {},
  //   },
  // }

  handleLoginSuccess = () => {
    // const destination = (location.state || {}).from || '/'
    this.props.getUserInfo() 
      .then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <div className='login-wrapper'>
        <header>
          <h1>Login</h1>
        </header>
        <LoginForm 
          onLoginSuccess={() => this.handleLoginSuccess()}
        />
      </div>
    )
  }
}
  
export default LoginPage;