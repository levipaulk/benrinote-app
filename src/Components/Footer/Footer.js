import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {

  render() {
    return <>
      <footer className='footer' role='navigation'>
        <h3>
          <Link to='/'>
            BenriNote
          </Link>
        </h3>
        <h4>
            <Link to='/contact'>
                Contact Us
            </Link>
        </h4>
      </footer>
    </>
  }
}