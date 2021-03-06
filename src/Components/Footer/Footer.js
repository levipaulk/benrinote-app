import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {

  render() {
    return <>
      <footer className='footer'>
        <h3 className={'nav-links footer-link'}>
          <Link to='/'>
            <button className='nav-buttons footer-buttons'><h3 className='nav-buttons-home'>BenriNote</h3></button>
          </Link>
        </h3>
      </footer>
    </>
  }
}