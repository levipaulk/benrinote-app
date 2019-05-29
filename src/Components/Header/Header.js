import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
// import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          to='/publications'>
          Publications
        </Link>
        <Link
          to='/notes'>
          My Notes
        </Link>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    )
  }

  render() {
    return <>
      <nav className='Header' role='navigation'>
        <h3>
          <Link to='/'>
            BenriNote
          </Link>
        </h3>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    </>
  }
}