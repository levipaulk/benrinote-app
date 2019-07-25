import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
// import './Header.css'

export default class Header extends Component {
  state={
    active: true,
  }

  componentDidMount() {
    if(TokenService.hasAuthToken()) this.props.getUserPub()
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.props.clearUser()
  }

  toggleActive = () => {
    this.setState({ active: !this.state.active })
  }

  renderLogoutLink() {
    return (
      <>
        <div className='nav-col'>
          <Link
            to='/publications' className={`nav-links nav-col nav-a ${this.state.active ? 'nav-hide': null}`}>
            <button className='nav-buttons'>Publications</button>
          </Link>
        </div>
        <div className='nav-col'>
          <Link
            to='/dashboard' className={`nav-links nav-col nav-a ${this.state.active ? 'nav-hide': null}`}>
            <button className='nav-buttons'>My Dashboard</button>
          </Link>
        </div>
        <div className='nav-col'>
          <Link
            onClick={this.handleLogoutClick}
            to='/' className={`nav-links nav-col nav-a ${this.state.active ? 'nav-hide': null}`}>
            <button className='nav-buttons'>Logout</button>
          </Link>
        </div>
      </>
    )
  }

  renderLoginLink() {
    return (
      <>
        <div className='nav-col'>
          <Link
            to='/login' className={`nav-links nav-col nav-a ${this.state.active ? 'nav-hide': null}`}>
            <button className='nav-buttons'>Log in</button>
          </Link>
        </div>
        <div className='nav-col'>
          <Link
            to='/register' className={`nav-links nav-col nav-a ${this.state.active ? 'nav-hide': null}`}>
            <button className='nav-buttons'>Register</button>
          </Link>
        </div>
      </>
    )
  }

  render() {
    return <>
      <nav className='Header' role='navigation'>
        <div className='nav-col'>
          <Link to='/' className={'nav-links nav-links-main'}>
            <button className='nav-buttons nav-buttons-home-wrapper'><h3 className='nav-buttons-home'>BenriNote</h3></button>
          </Link>
          <button className='hamburger-wrapper' onClick={()=> this.toggleActive()}>
            <i className="fa fa-bars hamburger"></i>
          </button>
        </div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    </>
  }
}