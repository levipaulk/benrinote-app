import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import { Button, Input } from '../Utils/Utils'

export default class LoginForm extends Component {
  // static defaultProps = {
  //   onLoginSuccess: () => {}
  // }

  // constructor(props) {
  //   super(props);
  //   this.userName = React.createRef();
  //   this.password = React.createRef();
  // }

  state = {
    error: null,
    userName: '',
    password: '',
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    // const { user_name, password } = ev.target
    // const userName = this.userName.current.value
    // const password = this.password.current.value
    const userName = this.state.userName
    const password = this.state.password

    AuthApiService.postLogin({
      // user_name: user_name.value,
      // password: password.value,
      user_name: userName,
      password: password
    })
      .then(res => {
        // user_name.value = ''
        // password.value = ''
        // this.userName.current.value = ''
        // this.password.current.value = ''
        this.setState({userName: ''})
        this.setState({password: ''})
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <Input
            required
            name='user_name'
            id='LoginForm__user_name'
            // ref={this.userName}
            value={this.state.userName}
            onChange={e => this.setState({ userName: e.target.value })}
            >
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'
            // ref={this.password}
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            >
          </Input>
        </div>
        <Button type='submit'>
          Login
        </Button>
      </form>
    )
  }
}