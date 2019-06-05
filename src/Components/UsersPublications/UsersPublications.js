import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class UsersPublications extends Component {

// =============================================================================
// Render Sections alongside Associated Notes
// =============================================================================

  render() {
    const { pub, deleteUserPub } = this.props
    return (
      <>
        <Link to={`/publication/${pub.pub_id}`}>
          <h3>{pub.title}</h3>
          <img src={pub.cover} alt={`${pub.title}'s Cover`}/>
        </Link>
        <Link to={`/dashboard/${pub.pub_id}`}>
          <h4>Notes</h4>
        </Link>
        <button onClick={() => deleteUserPub(pub.pub_id)}>DELETE NOTES</button>
      </>
    )
  }
}