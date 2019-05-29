import React, {Component} from 'react';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';

class SignUpPage extends Component {

  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <div className='signup-wrapper'>
        <header role='banner'>
          <h1>Sign Up</h1>
        </header>
        <SignUpForm 
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    )
  }
}
  
export default SignUpPage;