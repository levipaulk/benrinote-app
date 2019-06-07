import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
// import './Header.css'

export default class Header extends Component {
  componentDidMount() {
    if(TokenService.hasAuthToken()) this.props.getUserPub()
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.props.clearUser()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in nav-links'>
        <Link
          to='/publications' className='nav-links nav-col nav-a'>
          Publications
        </Link>
        <Link
          to='/dashboard' className='nav-links nav-col nav-a'>
          My Dashboard
        </Link>
        <Link
          onClick={this.handleLogoutClick}
          to='/' className='nav-links nav-col nav-a'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in nav-links'>
        <Link
          to='/login' className='nav-links nav-col nav-a'>
          Log in
        </Link>
        <Link
          to='/register' className=' nav-linksnav-col nav-a'>
          Register
        </Link>
      </div>
    )
  }

  render() {
    return <>
      <nav className='Header nav-row' role='navigation'>
        <Link to='/' className={'nav-links nav-col'}>
          <h3>BenriNote</h3>
        </Link>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    </>
  }
}