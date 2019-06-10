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
      <>
        <Link
          to='/publications' className='nav-links nav-col nav-a'>
          <button className='nav-buttons'>Publications</button>
        </Link>
        <Link
          to='/dashboard' className='nav-links nav-col nav-a'>
          <button className='nav-buttons'>My Dashboard</button>
        </Link>
        <Link
          onClick={this.handleLogoutClick}
          to='/' className='nav-links nav-col nav-a'>
          <button className='nav-buttons'>Logout</button>
        </Link>
      </>
    )
  }

  renderLoginLink() {
    return (
      <>
        <Link
          to='/login' className='nav-links nav-col nav-a'>
          <button className='nav-buttons'>Log in</button>
        </Link>
        <Link
          to='/register' className=' nav-linksnav-col nav-a'>
          <button className='nav-buttons'>Register</button>
        </Link>
      </>
    )
  }

  render() {
    return <>
      <nav className='Header' role='navigation'>
        <Link to='/' className={'nav-links nav-col'}>
          <button className='nav-buttons'><h3 className='nav-buttons-home'>BenriNote</h3></button>
        </Link>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    </>
  }
}