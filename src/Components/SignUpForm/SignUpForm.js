import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  // constructor(props) {
  //   super(props);
  //   this.userName = React.createRef();
  //   this.fullName = React.createRef();
  //   this.password = React.createRef();
  //   this.nickname = React.createRef();
  // }
  
  state = {
    error: null,
    userName: '',
    fullName: '',
    password: '',
    nickname: ''
  }

  handleSubmit = ev => {
    ev.preventDefault()
    // const { full_name, nick_name, user_name, password } = ev.target
    // const userName = this.userName.current.value
    // const fullName = this.fullName.current.value
    // const password = this.password.current.value
    // const nickname = this.nickname.current.value
    const userName = this.state.userName
    const fullName = this.state.fullName
    const password = this.state.password
    const nickname = this.state.nickname

    this.setState({ error: null })
    AuthApiService.postUser({
      // user_name: user_name.value,
      // full_name: full_name.value,
      // password: password.value,
      // nickname: nick_name.value,
      user_name: userName,
      full_name: fullName,
      password: password,
      nickname: nickname
    })
      .then(user => {
        // full_name.value = ''
        // nick_name.value = ''
        // user_name.value = ''
        // password.value = ''
        // this.userName.current.value = ''
        // this.fullName.current.value = ''
        // this.password.current.value = ''
        // this.nickname.current.value = ''
        this.setState({ userName: '' })
        this.setState({ fullName: '' })
        this.setState({ password: '' })
        this.setState({ nickname: '' })
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name <Required />
          </label>
          <Input
            name='full_name'
            type='text'
            required
            id='RegistrationForm__full_name'
            // ref={this.fullName}
            value={this.state.fullName}
            onChange={e => this.setState({ fullName: e.target.value })}>
          </Input>
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'
            // ref={this.userName}
            value={this.state.userName}
            onChange={e => this.setState({ userName: e.target.value })}>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'
            // ref={this.password}
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}>
          </Input>
        </div>
        <div className='nick_name'>
          <label htmlFor='RegistrationForm__nick_name'>
            Nickname
          </label>
          <Input
            name='nick_name'
            type='text'
            required
            id='RegistrationForm__nick_name'
            // ref={this.nickname}
            value={this.state.nickname}
            onChange={e => this.setState({ nickname: e.target.value })}>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}